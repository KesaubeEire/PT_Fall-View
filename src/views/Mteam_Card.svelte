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
  import { _card_detail } from '@/stores';
  import { CONFIG } from '@/siteConfig/mteam';
  import IconComment from '@/assets/icon_comment.svelte';

  //---------------------------------------------
  /** 父传值: 种子信息*/
  export let torrentInfo;

  // 置顶相关
  let toppingLevelArray;
  if (torrentInfo.status.toppingLevel) {
    toppingLevelArray = Array(Number(torrentInfo.status.toppingLevel)).fill();
  }

  // 下载免费打折相关
  const _discount = torrentInfo.status.discount;
  const _discountEndTime = torrentInfo.status.discountEndTime;
  const _discountText = {
    FREE: '免费',
    PERCENT_50: '50%'
  };
  const _discountCalcTime = () => {
    const now = new Date();
    const end = new Date(_discountEndTime);
    const res = Math.floor((end.getTime() - now.getTime()) / (1000 * 3600));
    // console.log(res);
    return res;
  };

  /** 卡片 dom */
  let card_holder;

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
  /** lazy_load: pic 是否已加载 */
  let isLoaded = false;

  /** lazy_load: 加载真实图片 */
  const loadRealImage = () => {
    if (picSrc && !isLoaded) {
      imgElement.src = picSrc;
      imgElement.classList.add('loaded'); // NOTE: 这里没起作用, 强行改 opacity 了
      imgElement.style.opacity = 1;
      // console.log(torrentInfo.id + ` Loaded.`);

      isLoaded = true;
    }
  };

  onMount(() => {
    // lazy_load: 初始化观察器
    if (!isLoaded) {
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
      if (imgElement && !isLoaded) observer.observe(imgElement);

      // 视图聚焦每次加载的第一个图片
      if (torrentInfo.pt_fall_highlight) {
        card_holder.scrollIntoView({
          behavior: 'smooth' // 平滑滚动
        });
      }
    }
  });

  onDestroy(() => {
    // lazy_load: 清理观察器
    if (observer) observer.disconnect();
  });
</script>

<div class="card_holder" bind:this={card_holder}>
  <!-- 切页第一个种子高亮 -->
  {#if torrentInfo.pt_fall_highlight}
    <div class="card_new_page_highlight">新页面 ({torrentInfo.index}+)</div>
  {/if}

  <!-- 种子标题 -->
  <div class="card_title">
    <!-- 
        NOTE: 
        属性	            作用
        target="_blank"	  强制在新标签页打开链接
        rel="noopener"	  阻断新页面通过 window.opener 访问原页面（现代浏览器默认行为）
        rel="noreferrer"	隐藏来源页面的 Referer 信息（增强隐私保护）
    -->
    {#if $_card_detail.title}
      <a href={'/detail/' + torrentInfo.id} target="_blank" rel="noopener noreferrer">
        <!-- NOTE: 暂且是种子描述优先 -->
        {`<${torrentInfo.index}> ` + (torrentInfo.smallDescr ? '[des] ' + torrentInfo.smallDescr : '[name] ' + torrentInfo.name)}
      </a>
    {/if}
  </div>

  <!-- 种子图片 -->
  <div class="card_pic">
    <!-- <img src={torrentInfo.imageList[0]} alt={torrentInfo.imageList[0]} /> -->

    <img
      bind:this={imgElement}
      src={isLoaded ? picSrc : placeholder}
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

    <!-- 种子索引 index -->
    <div class="card-index">
      <!-- 置顶情况 -->
      {#if $_card_detail.topping && torrentInfo.status.toppingLevel != '0'}
        <!-- <div>置顶:{torrentInfo.status.toppingLevel}</div> -->
        <div class="card_info__topping">
          <!-- <div class="_tag">{torrentInfo.status.toppingLevel}</div> -->
          {#each toppingLevelArray as _, index}
            <img
              style="
            background: url(/static/media/icons.8bb5446ebbbd07050285.gif) 0 -202px;
            height: 14px;
            width: 14px;"
              src={CONFIG.ICON.PIN}
              alt="PIN"
            />
          {/each}
        </div>
        &nbsp;
      {/if}

      <!-- 索引 -->
      {torrentInfo.index}

      &nbsp;

      <!-- 种子打折情况 -->
      {#if $_card_detail.free && _discount != 'NORMAL'}
        <div class="_tag" class:_tag_discount_free={_discount == 'FREE'} class:_tag_discount_50={_discount == 'PERCENT_50'}>
          {_discountText[_discount]}{_discountEndTime ? ':' + _discountCalcTime() + '小时' : ''}
        </div>
      {/if}
    </div>
  </div>

  <!-- 种子信息 -->
  <div class="card_info">
    <!-- // 显示置顶和免费
    free: false,
    // 显示副标题
    sub_title: false,
    // 显示标签
    tags: false,
    // 显示大小&下载&收藏
    size_download_collect: false,
    // 显示上传时间
    upload_time: false,
    // 显示评论/上传/下载/完成
    statistics: false -->

    <!-- NOTE: 显示置顶和免费在图片 index 处 -->

    <!-- 种子信息_副标题 -->
    {#if $_card_detail.sub_title}
      <div class="card_info-item card_info__sub_title">
        <div>副标题:{torrentInfo.smallDescr}</div>
      </div>
    {/if}

    <!-- 种子信息_标签 -->
    <!-- 来自开发者的介绍:
        if ((val & 1) === 1) { ret.push("diy"); DIV }
        if ((val & 2) === 2) { ret.push("dub"); 国配 }
        if ((val & 4) === 4) { ret.push("sub"); 中字 } 
      -->
    {#if $_card_detail.tags && torrentInfo.labels != 0}
      <div class="cl-tags">
        <!--  标签 Tags -->
        {#if (torrentInfo.labels & 1) === 1}
          <div class="_tag _tag_diy">DIY</div>
        {/if}
        {#if (torrentInfo.labels & 2) === 2}
          <div class="_tag _tag_dub">国配</div>
        {/if}
        {#if (torrentInfo.labels & 4) === 4}
          <div class="_tag _tag_sub">中字</div>
        {/if}
      </div>
    {/if}

    <!-- 种子信息_下载&收藏 -->
    {#if $_card_detail.size_download_collect}
      <div class="card_info-item card_info__dl_and_cl" bind:this={dlclElement}>
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
    {/if}

    <!-- 种子信息_上传时间 -->
    {#if $_card_detail.upload_time}
      <div class="card_info-item card_info__upload_time">
        <div>上传时间:{torrentInfo.createdDate}</div>
      </div>
    {/if}

    <!-- 种子信息_评论/上传/下载/完成 -->
    {#if $_card_detail.statistics}
      <div class="card_info-item card_info__statistics">
        <!-- <div>评论:{torrentInfo.status.comments}</div> -->
        <!-- <div>上传:{torrentInfo.status.seeders}</div> -->
        <!-- <div>下载:{torrentInfo.status.leechers}</div> -->
        <!-- <div>完成:{torrentInfo.status.timesCompleted}</div> -->

        <IconComment></IconComment>
        &nbsp;
        <b>{torrentInfo.status.comments}</b>
        &nbsp;&nbsp;
        <img src={CONFIG.ICON.SEEDERS} alt="SVG_Seeders" />
        &nbsp;
        <b>{torrentInfo.status.seeders}</b>
        &nbsp;&nbsp;
        <img src={CONFIG.ICON.LEECHERS} alt="SVG_Leechers" />
        &nbsp;
        <b>{torrentInfo.status.leechers}</b>
      </div>
    {/if}
  </div>
</div>

<style scoped>
  .card_new_page_highlight {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 68, 0, 0.5);
    color: white;
    text-align: center;
  }
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
    flex-direction: column;

    padding: 4px 8px;

    & .card_info-item {
      display: flex;
      justify-content: space-around;
      align-items: center;

      /* min-height: 32px; */
      width: 100%;
    }

    & .card_info__dl_and_cl {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 32px;
    }

    & .card_info__statistics {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .card_info__topping {
    display: flex;
    /* justify-content: center; */
    align-items: center;
  }

  /* 标签 */

  .cl-tags {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    gap: 2px;

    padding-top: 4px;
    padding-bottom: 4px;
  }
  ._tag {
    /* padding: 1px 6px; */
    height: 1.3em;
    line-height: 1.3em;
    padding: 0 0.5em;
    border-radius: 6px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-size: 12px;
  }
  ._tag_diy {
    color: #ffffff;
    background-color: rgb(90, 189, 72);
  }
  ._tag_dub {
    color: #ffffff;
    background-color: rgb(90, 59, 20);
  }
  ._tag_sub {
    color: #ffffff;
    background-color: rgb(59, 74, 127);
  }
  ._tag_discount_50 {
    background-color: rgb(255, 85, 0);
    color: #ffffff;
  }
  ._tag_discount_free {
    background-color: rgb(16, 142, 233);
    color: #ffffff;
  }

  .card_pic {
    position: relative;
  }

  /* 卡片索引 */
  .card-index {
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px 9px 4px 9px;
    margin: 0;
    /* height: 20px; */
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;

    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    /* border-top-right-radius: 100px; */
    /* border-bottom-right-radius: 100px; */

    display: flex;
    align-items: center;

    pointer-events: none;
  }
</style>
