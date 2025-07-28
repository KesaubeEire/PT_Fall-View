<!-- 卡片的展示处理
标准格式截止时间: 2025.01.30

let _torrentInfo =  {
    "id": "899862",
    "createdDate": "2025-01-30 00:06:23",
    "lastModifiedDate": "2025-01-30 00:07:08",
    "name": "xxx S02E24 1080p Viu WEB-DL AAC2.0 H.264-MWeb",
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
  import { fade } from 'svelte/transition';
  import { notyf_lt } from '@/lib/notyf';
  import { onMount, onDestroy } from 'svelte';
  import { _card_detail, _iframe_switch, _iframe_url, _show_hover_pic, _block_gay } from '@/stores';
  import { CONFIG } from '@/siteConfig/mteam';
  import IconComment from '@/assets/icon_comment.svelte';
  import HoverView from '@/lib/hoverView';
  import _PicErrorLOGO from '@/assets/pic_error.svg';
  import _PicNoLOGO from '@/assets/pic_no.svg';

  //---------------------------------------------
  /** 父传值: 种子信息*/
  export let torrentInfo;

  // 内部信息显示
  let _inner_info_show = false;
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
  // ## 分类颜色
  /** 本地: 分类颜色*/
  const _categoryColor = CONFIG.CATEGORY[torrentInfo.category].color;
  const _defaultColor = 'rgba(255, 255, 255, 0.5)';

  /** 根据背景颜色动态调整文字黑白
   * @param background 背景颜色(带#)
   */
  function getTextColor(background) {
    // 移除颜色字符串中的 '#'
    const color = background.replace('#', '');

    // 提取红、绿、蓝通道的值
    const red = parseInt(color.substr(0, 2), 16);
    const green = parseInt(color.substr(2, 2), 16);
    const blue = parseInt(color.substr(4, 2), 16);

    // 计算亮度
    const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

    // 如果亮度低于阈值128，则返回白色；否则返回黑色
    return brightness < 128 ? 'white' : 'black';
  }

  //---------------------------------------------
  // ## 文件大小整理
  function getFileSize(size) {
    if (size === 0) {
      return '0 B';
    }

    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    let sizeCopy = size;

    while (sizeCopy >= 1024 && i < units.length - 1) {
      sizeCopy /= 1024;
      i++;
    }

    // 保留两位小数，但去掉末尾的零和点
    const formattedSize = sizeCopy.toFixed(2).replace(/\.?0+$/, '');
    return `${formattedSize} ${units[i]}`;
  }

  //---------------------------------------------
  // ## 下载收藏操作
  /** 下载和收藏按钮 holder 的 dom */
  let dlclElement_inner;
  let dlclElement_outer;

  /** 拿到下载和收藏按钮的 Dom
   * @param torrentID 种子ID
   * @param dlcl 下载和收藏按钮 holder 的 dom
   */
  function get__DOWN_and_COLLET__Dom(torrentID, dlcl) {
    // TODO: 拿到起作用的按钮, 生成代理按钮 / 切页后拿到代理按钮
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
      targetButtons[0].style.margin = 0;

      // 7. 去重处理 (同一行可能有多个按钮)
      const uniqueButtons = [...new Set(targetButtons)];
      // console.log('找到的按钮:', uniqueButtons);

      // 8. 安在 holder 上
      // 将按钮放到容器
      uniqueButtons.forEach(button => {
        dlcl.appendChild(button);
      });
    } else {
      notyf_lt.error('没找到捏, 建议在种子详情里下载收藏~');
    }
  }

  //---------------------------------------------
  // ## 悬浮大图
  /** 悬浮大图是否在悬浮 */
  let isHovered = false;
  /** 悬浮大图是否在移动 */
  let isMoving = false;
  /** 悬浮大图的鼠标位置 */
  let mouseX = 0;
  let mouseY = 0;
  /** 悬浮大图实例 */
  let hoverView = new HoverView();

  //---------------------------------------------
  // ## 悬浮显示卡片内信息
  /** 悬浮显示卡片内信息 holder 的 dom */
  let overlayHolder;

  /** 悬浮显示卡片内信息 content 的 dom */
  let overlayContent;

  //---------------------------------------------

  // 获得 dom -> overlayHolder 的高度
  let overlayContentHeight = 0;
  function getOverlayContentHeight() {
    // overlayContentHeight = overlayContent.offsetHeight;
    if (overlayContent) overlayContentHeight = overlayContent.offsetHeight;
  }
  $: {
    if (overlayContent) {
      getOverlayContentHeight();
    }
  }

  //---------------------------------------------
  /** 本地: 图片是否加载错误*/
  let _picError = false;
  // M-Team 特别处理: 对 Gay 区做图片处理
  const static_gay_warn = '/static/cate/gayhd.gif';

  //  响应 $_block_gay 对 imgElement 重加载
  $: {
    if (torrentInfo.category == 440 && $_block_gay == 0) {
      if (imgElement) {
        imgElement.style.width = '100%';
        imgElement.src = picSrc;
        imgElement.classList.add('loaded'); // NOTE: 这里没起作用, 强行改 opacity 了
        imgElement.style.opacity = 1;
        isLoaded = true;

        if (overlayContent) {
          getOverlayContentHeight();
        }
      }
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
      imgElement.style.width = '100%';
      imgElement.src = picSrc;
      imgElement.classList.add('loaded'); // NOTE: 这里没起作用, 强行改 opacity 了
      imgElement.style.opacity = 1;
      // console.log(torrentInfo.id + ` Loaded.`);

      isLoaded = true;

      if (overlayContent) {
        getOverlayContentHeight();
      }
    }
  };

  //---------------------------------------------
  /** 打开种子详情 iframe */
  function openIframe() {
    $_iframe_url = 'https://' + location.host + '/detail/' + torrentInfo.id;
    $_iframe_switch = 1;
    // console.log($_iframe_url);
  }

  //---------------------------------------------
  /** 新页面高亮 */
  let showHighlight = true;

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

      // 新页面高亮3秒后消失
      setTimeout(() => {
        showHighlight = false;
      }, 3000);
    }

    // 获得 dom -> overlayHolder 的高度
    getOverlayContentHeight();

    // 重置图片宽度
    if (imgElement) imgElement.style.width = 'auto';
  });

  onDestroy(() => {
    // lazy_load: 清理观察器
    if (observer) observer.disconnect();
  });
</script>

<div class="card_holder" bind:this={card_holder}>
  <!-- 切页第一个种子高亮 -->
  {#if torrentInfo.pt_fall_highlight && showHighlight}
    <div transition:fade={{ duration: 500 }} class="card_new_page_highlight">新页面 ({torrentInfo.index}+)</div>
  {/if}

  <!-- NOTE: 分区类别 -->
  {#if $_card_detail.category}
    <div
      class="card-category"
      data-href={`https://${location.host}/browse?cat=` + torrentInfo.category}
      style="
      background-color: {_categoryColor ?? 'transparent'};
      color: {_categoryColor ? getTextColor(_categoryColor) : 'black'}"
    >
      <!-- 分类图标 -->
      <img class="card_category-img" src={CONFIG.CATEGORY[torrentInfo.category].src} alt={CONFIG.CATEGORY[torrentInfo.category].alt} />

      &nbsp;&nbsp;

      <!-- 分类名称 -->
      {CONFIG.CATEGORY[torrentInfo.category].alt}
    </div>
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
      <a class="__main_title" href={'/detail/' + torrentInfo.id} target="_blank" rel="noopener noreferrer">
        <!-- NOTE: 暂且是种子描述优先 -->
        {torrentInfo.name}
      </a>
    {/if}
  </div>

  <!-- 种子图片 -->
  <div class="card_pic" style="min-height: {overlayContentHeight + 24}px;" style:--cateColor={_categoryColor + 'b0'}>
    <!-- <img src={torrentInfo.imageList[0]} alt={torrentInfo.imageList[0]} /> -->

    {#if !_picError}
      {#if $_block_gay && torrentInfo.category == 440}
        <!-- NOTE: Gay -->
        <div class="pic_error" style="  background-color: {_categoryColor}">
          <div>
            <img style="height: 100%; width:60px; border-radius:20px;" src={static_gay_warn} alt="pic error" />
          </div>
          <div class="ant-typography" style="color: white; font-size:16px;">
            GAY WARNING<br />同志警告
          </div>
        </div>
      {:else if torrentInfo.imageList[0]}
        <!-- NOTE: 正常图片 -->
        <img
          bind:this={imgElement}
          src={isLoaded ? picSrc : placeholder}
          data-src={picSrc}
          on:error={() => {
            // 错误处理
            _picError = true;
            if (!imgElement) {
              console.log(`<${torrentInfo.index}>[${torrentInfo.id}] imgElement 丢失.`);
            }
          }}
          class="lazy-image"
          alt={torrentInfo.id}
        />
      {:else}
        <!-- NOTE: 无图片 -->
        <div class="pic_error" style="">
          <div>
            <img style="height: 100%;width: 100px;" src={_PicNoLOGO} alt="no pic" />
          </div>
          <div>本种没有图片</div>
        </div>
      {/if}
    {:else}
      <!-- NOTE: 错误图片 -->
      <div class="pic_error" style="">
        <div>
          <img style="height: 100%;width: 100px;" src={_PicErrorLOGO} alt="pic error" />
        </div>
        <div class="ant-typography" style="color: {getTextColor(_categoryColor)}; font-size:16px;">图片加载失败</div>
      </div>
    {/if}

    <!-- 局部悬浮预览 -->
    {#if $_show_hover_pic && !_picError}
      <!-- svelte-ignore a11y_no_static_element_interactions -->
      <!-- svelte-ignore a11y_mouse_events_have_key_events -->
      <div
        class="hover-trigger"
        on:mouseover={e => {
          // 悬浮大图
          isHovered = true;
          hoverView.handleMouseOver(e, imgElement);
          // console.log(`<${torrentInfo.id}>isHovered: ${isHovered}, isMoving: ${isMoving}`);
        }}
      >
        <!-- {torrentInfo.torrentIndex + 1} -->
        <img style="pointer-events: none;" src={CONFIG.ICON.PREVIEW} alt="PREVIEW" />
      </div>
    {/if}

    <!-- 添加悬浮显示卡片内信息的 innerDOM -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      bind:this={overlayHolder}
      class="hover-overlay"
      on:mouseenter={() => {
        // 卡片内信息

        if (imgElement) imgElement.style.filter = 'blur(2px)';
        overlayHolder.style.opacity = '1';
        _inner_info_show = true;
      }}
      on:mousemove={e => {
        // 悬浮大图
        isMoving = true;
        if (isHovered && isMoving) {
          hoverView.handleMouseMove(e);
        }
      }}
      on:mouseleave={() => {
        // 卡片内信息
        if (imgElement) imgElement.style.filter = 'none';
        overlayHolder.style.opacity = '0';
        _inner_info_show = false;

        // 悬浮大图
        isMoving = false;
        if (isHovered) {
          isHovered = false;
          hoverView.clearPreview();
          // console.log(`<${torrentInfo.id}>isHovered: ${isHovered}, isMoving: ${isMoving}`);
        }
      }}
      on:mousedown|self={openIframe}
    >
      <!-- NOTE: 种子内信息 你可以在这里添加任何想要显示的内容 -->
      <div class="overlay-content" bind:this={overlayContent}>
        <!-- 种子内信息_索引和大小 -->
        <div class="__inner_index_and_size">
          <!-- 种子索引 index -->
          <div class="card-index __inner_index" style="background-color:black; color:white">
            <!-- 置顶情况 -->
            {#if torrentInfo.status.toppingLevel != '0'}
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
            {#if _discount != 'NORMAL'}
              <div class="_tag" class:_tag_discount_free={_discount == 'FREE'} class:_tag_discount_50={_discount == 'PERCENT_50'}>
                {_discountText[_discount]}{_discountEndTime ? ':' + _discountCalcTime() + '小时' : ''}
              </div>
            {/if}
          </div>

          <!-- 打开种子详情 iframe -->
          <button class="__iframe_button" style="background-color: {_categoryColor ?? 'transparent'}; color:{_categoryColor ? getTextColor(_categoryColor) : 'black'}" on:click={openIframe}> 打开 iframe </button>

          <!-- 种子大小 -->
          <div class="card-index card-index-right __inner_index __inner_size" style="background-color: {_categoryColor ?? 'transparent'}; color:{_categoryColor ? getTextColor(_categoryColor) : 'black'}">
            {getFileSize(torrentInfo.size)}
          </div>
        </div>

        <!-- 种子内信息_分区类别 -->
        <div
          class="card-category card_info-item"
          data-href={`https://${location.host}/browse?cat=` + torrentInfo.category}
          style="
            height: 40px;
            background-color: {_categoryColor ?? 'transparent'};
            color: {_categoryColor ? getTextColor(_categoryColor) : 'black'}"
        >
          <!-- 分类图标 -->
          <img class="card_category-img card_category_square" style="width: 36px;height: 36px;" src={CONFIG.CATEGORY[torrentInfo.category].src} alt={CONFIG.CATEGORY[torrentInfo.category].alt} />

          &nbsp;&nbsp;

          <!-- 分类名称 -->
          {CONFIG.CATEGORY[torrentInfo.category].alt}
        </div>

        <!-- 种子内信息_主标题 -->
        <div
          style="width: 100%;"
          class="card_info-item card_info__sub_title"
          on:mousedown|stopPropagation={e => {
            e.stopPropagation();
          }}
        >
          <a class="__main_title __straight" href={'/detail/' + torrentInfo.id} target="_blank" rel="noopener noreferrer" title={torrentInfo.name}>
            {torrentInfo.name}
          </a>
        </div>

        <!-- 种子内信息_副标题 -->
        <div style="width: 100%;" class="card_info-item card_info__sub_title">
          <div class="__sub_title">{torrentInfo.smallDescr}</div>
        </div>

        <!-- 种子内信息_标签 -->
        <!-- 来自开发者的介绍:
          if ((val & 1) === 1) { ret.push("diy"); DIV }
          if ((val & 2) === 2) { ret.push("dub"); 国配 }
          if ((val & 4) === 4) { ret.push("sub"); 中字 } 
        -->
        {#if torrentInfo.labels != 0}
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

        <!-- 种子内信息_上传时间 -->
        <div class="card_info-item card_info__upload_time">
          <div>上传时间:{torrentInfo.createdDate}</div>
        </div>

        <!-- 种子内信息_评论/上传/下载/完成 -->
        <div class="card_info-item card_info__statistics" bind:this={dlclElement_inner}>
          <!-- <div>评论:{torrentInfo.status.comments}</div> -->
          <!-- <div>上传:{torrentInfo.status.seeders}</div> -->
          <!-- <div>下载:{torrentInfo.status.leechers}</div> -->
          <!-- <div>完成:{torrentInfo.status.timesCompleted}</div> -->
          <div class="__center">
            <IconComment></IconComment>
            <b>{torrentInfo.status.comments}</b>
          </div>

          <div class="__center">
            <img style="width: 14px; height: 14px;" src={CONFIG.ICON.SEEDERS} alt="SVG_Seeders" />
            <b>{torrentInfo.status.seeders}</b>
          </div>

          <div class="__center">
            <img style="width: 14px; height: 14px;" src={CONFIG.ICON.LEECHERS} alt="SVG_Leechers" />
            <b>{torrentInfo.status.leechers}</b>
          </div>

          <!-- 种子内信息_下载&收藏 -->
          <button
            on:mousedown|stopPropagation={e => {
              e.stopPropagation();
            }}
            on:click|stopPropagation={e => {
              get__DOWN_and_COLLET__Dom(torrentInfo.id, dlclElement_inner);

              // NOTE: 记得提醒用户 => 原列表的这玩意儿会消失
              // 记得让这玩意儿消失
              e.target.style.display = 'none';
              // console.log(e);
            }}
            title="(原列表的这俩按钮会消失)"
          >
            下载&收藏
          </button>
        </div>
      </div>
    </div>

    <!-- 种子索引 index -->
    {#if !_inner_info_show}
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
    {/if}

    <!-- 种子大小 -->
    {#if $_card_detail.size && !_inner_info_show}
      <div class="card-index card-index-right" style="background-color: {_categoryColor ?? 'transparent'}; color:{_categoryColor ? getTextColor(_categoryColor) : 'black'}">
        {getFileSize(torrentInfo.size)}
      </div>
    {/if}
  </div>

  <!-- 种子信息 -->
  {#if $_card_detail.sub_title || $_card_detail.tags || $_card_detail.download_collect || $_card_detail.upload_time || $_card_detail.statistics}
    <div class="card_info">
      <!-- NOTE: 显示置顶和免费在图片 index 处 -->

      <!-- 种子信息_副标题 -->
      {#if $_card_detail.sub_title}
        <div class="card_info-item card_info__sub_title">
          <div>{torrentInfo.smallDescr}</div>
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

      <!-- 种子信息_下载&收藏  outerDOM -->
      {#if $_card_detail.download_collect}
        <div class="card_info-item card_info__dl_and_cl" bind:this={dlclElement_outer}>
          <button
            on:click={e => {
              get__DOWN_and_COLLET__Dom(torrentInfo.id, dlclElement_outer);

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
  {/if}
</div>

<style scoped>
  /* 卡片分类 */
  .card-category {
    height: 20px;
    padding: 0 2px;
    border: 1px;
    background: black;
    color: white;
    font-weight: 900;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 卡片种类tag预览图 */
  .card_category-img {
    /* height: 18px; */
    height: 35px;
    width: 28px;

    /* background-size: 100% 141%; */
    background-position: center top;

    /* padding-left: 5%; */
    padding-top: 6px;
  }

  .card_category_square {
    width: 40px;
    height: 40px;
    padding-top: 0;
    border-radius: 10px;
  }

  .card_new_page_highlight {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(8, 68, 0, 0.5);
    color: white;
    text-align: center;
    padding: 8px 8px;
  }
  .card_pic img {
    width: 100%;
    height: 100%;
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

    padding: 0px 8px;

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

  .__main_title {
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;

    /* font-size: 16px; */
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
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
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cateColor);
  }

  .pic_error {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    gap: 10px;
    line-height: 24px;
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

    z-index: 2;

    display: flex;
    align-items: center;

    pointer-events: none;
  }

  /* 卡片索引_右 */
  .card-index-right {
    left: initial;
    right: 0;
    padding: 4px 4px 4px 8px;

    background-color: rgb(0, 0, 0);
    color: white;

    /* border-top-left-radius: 20px; */
    /* border-bottom-left-radius: 20px; */
  }

  /* 悬浮预览: 局部触发器 */
  .hover-trigger {
    position: absolute;
    top: 28px;
    right: 8px;
    /* padding-right: 19px; */
    /* padding-left: 2px; */
    padding: 0;
    width: 42px;
    margin: 0;
    height: 40px;
    line-height: 16px;
    font-size: 16px;

    /* background-color: rgb(255, 187, 16); */

    opacity: 0.5;

    /* color: yellow; */
    /* border-top-right-radius: 0px; */
    /* border-bottom-left-radius: 100px; */
    border-radius: 9999px;

    display: flex;
    align-items: center;

    /* pointer-events: none; */

    z-index: 2;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.8;
    }
  }

  /* 添加悬浮效果相关样式 */
  .hover-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;
    /* pointer-events: none; */
    z-index: 1;
  }

  .overlay-content {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 20%, transparent 100%);
    background: rgba(255, 255, 255, 0.9);
    /* background-color: rgba(0, 0, 0, 0.5); */

    padding: 0 0px 2px;
    /* border-radius: 4px; */
    color: #333;
    font-size: 14px;
    white-space: nowrap;

    display: flex;
    flex-direction: column;

    & .card_info-item {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 2px;

      padding-left: 8px;
      padding-right: 8px;
    }

    & .__main_title {
      text-align: center;
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;

      /* font-size: 16px; */
      font-weight: bold;

      &:hover {
        text-decoration: underline;
      }
    }

    & .__sub_title {
      white-space: pre-wrap;
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    & .card_info__statistics {
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      height: 32px;
    }
  }

  .__center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .__inner_index_and_size {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 100%;
    left: 0;
    top: -24px;
  }

  .__inner_index {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .__inner_size {
    position: relative;
    width: fit-content;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .__iframe_button {
    flex: 1;
    padding: 4px 8px;
    margin: 0;
    border: none;
    background: none;
    outline: none;
    appearance: none;
    box-sizing: border-box;
    white-space: nowrap;
  }
</style>
