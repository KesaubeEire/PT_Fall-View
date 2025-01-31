<!-- 卡片的展示处理
标准格式截止时间: 2025.01.30

let _torrentInfo =  {
    "id": "899862",
    "createdDate": "2025-01-30 00:06:23",
    "lastModifiedDate": "2025-01-30 00:07:08",
    "name": "Oshi No Ko Cantonese S02E24 1080p Viu WEB-DL AAC2.0 H.264-MWeb",
    "smallDescr": "【我推的孩子】 第二季/【推しの子】 第2期 | 2024 | 日本 | 动画 音乐 | 平牧大辅 橘纱央莉 仁科邦康 | 大塚刚央 伊驹百合绘 | 第2季第24集",
    "imdb": "https://www.imdb.com/title/tt28555741/",
    "imdbRating": "7.8",
    "douban": "https://movie.douban.com/subject/36409434/",
    "doubanRating": "8.7",
    "dmmCode": null,
    "author": null,
    "category": "402",
    "source": "8",
    "medium": null,
    "standard": "1",
    "videoCodec": null,
    "audioCodec": "6",
    "team": "44",
    "processing": null,
    "countries": [
        "17"
    ],
    "numfiles": "1",
    "size": "361791349",
    "tags": "",
    "labels": "4",
    "msUp": "10",
    "anonymous": true,
    "infoHash": null,
    "status": {
        "id": "899862",
        "createdDate": "2025-01-30 00:06:23",
        "lastModifiedDate": "2025-01-30 02:19:02",
        "pickType": "normal",
        "toppingLevel": "2",
        "toppingEndTime": "2025-01-30 03:06:23",
        "discount": "FREE",
        "discountEndTime": "2025-01-30 12:06:23",
        "timesCompleted": "561",
        "comments": "0",
        "lastAction": "2025-01-30 02:16:54",
        "lastSeederAction": "2025-01-30 02:17:00",
        "views": "9",
        "hits": "0",
        "support": "0",
        "oppose": "0",
        "status": "NORMAL",
        "seeders": "303",
        "leechers": "11",
        "banned": false,
        "visible": true,
        "promotionRule": null,
        "mallSingleFree": null
    },
    "editedBy": null,
    "editDate": null,
    "collection": false,
    "inRss": false,
    "canVote": false,
    "imageList": [
        "https://img1.doubanio.com/view/photo/m_ratio_poster/public/p2908684830.webp"
    ],
    "resetBox": null,
    "index": 1
}
-->

<script>
  import { notyf_lt } from '@/lib/notyf';
  import { onMount, onDestroy } from 'svelte';

  //---------------------------------------------
  /** 父传值: 种子信息*/
  export let torrentInfo;

  //---------------------------------------------
  // ## 下载收藏操作
  /** 下载和收藏按钮 holder 的 dom */
  let dlclElement;

  /** 拿到下载和收藏按钮的 Dom
   * @param torrentID
   */
  function get__DOWN_and_COLLET__Dom(torrentID) {
    // 1. 匹配所有 /detail/数字id 的链接
    const detailLinks = document.querySelectorAll(`a[href^="/detail/${torrentID}"]`);

    // 2. 遍历这些链接并收集对应的按钮
    const targetButtons = [];

    detailLinks.forEach(link => {
      // 3. 验证是否为数字ID格式
      if (!/\/detail\/\d+/.test(link.href)) return;

      // 4. 向上查找最近的 <tr> 祖先元素
      const tr = link.closest('tr');

      // 5. 在所在行中查找目标按钮
      if (tr) {
        tr.querySelectorAll('button').forEach(button => {
          // 6. 检查按钮是否包含指定样式的图标
          if (button.querySelector('span.ant-btn-icon')) {
            targetButtons.push(button);
          }
        });
      }
    });

    if (targetButtons.length) {
      // 7. 去重处理 (同一行可能有多个按钮)
      const uniqueButtons = [...new Set(targetButtons)];
      // console.log('找到的按钮:', uniqueButtons);

      // 8. 安在 holder 上
      // 将按钮放到容器
      uniqueButtons.forEach(button => {
        dlclElement.appendChild(button);
      });
    } else {
      notyf_lt.error('没找到捏, 建议在种子详情里下载收藏~');
    }
  }

  //---------------------------------------------
  // ## lazy_load 图片懒加载
  /** lazy_load: 默认pic */
  const placeholder = 'https://static.m-team.cc/static/media/logo.80b63235eaf702e44a8d.png';
  /** lazy_load: 真实pic */
  let picSrc = torrentInfo.imageList[0] || placeholder;
  /** lazy_load: pic dom */
  let imgElement;
  /** lazy_load: observer */
  let observer;

  /** lazy_load: 加载真实图片 */
  const loadRealImage = () => {
    if (picSrc) {
      imgElement.src = picSrc;
      // imgElement.classList.add('loaded'); // NOTE: 这里没起作用, 强行改 opacity 了
      imgElement.style.opacity = 1;
      // console.log(torrentInfo.id + ` Loaded.`);
    }
  };

  onMount(() => {
    // lazy_load: 初始化观察器
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            loadRealImage();
            observer.unobserve(imgElement); // 加载后停止观察
          }
        });
      },
      {
        rootMargin: '100px' // 提前100px加载
      }
    );

    if (imgElement) observer.observe(imgElement);
  });

  onDestroy(() => {
    // lazy_load: 清理观察器
    if (observer) observer.disconnect();
  });
</script>

<div class="card_holder">
  <!-- 种子标题 -->
  <div class="card_title">
    <!-- 
        NOTE: 
        属性	            作用
        target="_blank"	  强制在新标签页打开链接
        rel="noopener"	  阻断新页面通过 window.opener 访问原页面（现代浏览器默认行为）
        rel="noreferrer"	隐藏来源页面的 Referer 信息（增强隐私保护）
    -->
    <a href={'/detail/' + torrentInfo.id} target="_blank" rel="noopener noreferrer">
      {`<${torrentInfo.index}> ` + torrentInfo.smallDescr}
    </a>
  </div>

  <!-- 种子图片 -->
  <div class="card_pic">
    <!-- <img src={torrentInfo.imageList[0]} alt={torrentInfo.imageList[0]} /> -->

    <img
      bind:this={imgElement}
      src={placeholder}
      data-src={picSrc}
      on:error={() => {
        // 错误处理
        // console.log(torrentInfo.index);
        if (imgElement) imgElement.src = placeholder;
        else {
          console.log(`<${torrentInfo.index}>[${torrentInfo.id}] imgElement 丢失.`);
        }
      }}
      class="lazy-image"
      alt={torrentInfo.id}
    />
  </div>

  <!-- 种子信息 -->
  <div class="card_info">
    <!-- 种子信息_下载&收藏 -->
    <div class="card_info__dl_and_cl" bind:this={dlclElement}>
      <button
        on:click={e => {
          get__DOWN_and_COLLET__Dom(torrentInfo.id);

          // NOTE: 记得提醒用户 => 原列表的这玩意儿会消失
          // 记得让这玩意儿消失
          e.target.style.display = 'none';
          // console.log(e);
        }}
        title="(原列表的这俩按钮会消失)"
      >
        下载 & 收藏
      </button>
    </div>
  </div>
</div>

<style scoped>
  .card_pic img {
    width: 100%;
  }
  .lazy-image {
    opacity: 0.2;
    transition: opacity 0.5s ease;
  }
  /* FIXME: 不知道为啥这里不起作用 */
  .lazy-image.loaded {
    opacity: 1;
  }
  .card_info {
    display: flex;
    justify-content: center;
    align-items: center;

    & .card_info__dl_and_cl {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 32px;
    }
  }
</style>
