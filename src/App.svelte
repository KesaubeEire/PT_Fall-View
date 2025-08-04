<!-- 
  脚本整体结构思路:
  1. 判断 host -> 不同的域名走不同的框架
  2. 判断 path -> 在指定的 path 下进行读取种子列表操作
  3. 渲染 bricks

  具体流程
  0. 准备好 下一页按钮 / 悬浮岛 / 选项侧边栏 / modal层
  1. 主流程: 
    1.1 将 host 分流
    1.2 拿到主列表的 div, 加上同等的瀑布流 div, 隐藏之并提供切换
    1.3 拿到种子列表详细数据, 填成 bricks 放进瀑布流 div 里
-->
<script>
  import { fade } from 'svelte/transition';
  import { _iframe_switch, _iframe_url, _side_panel_switch } from './stores';
  import { mount } from 'svelte';
  import EntryMteam from './views/Entry_Mteam.svelte';
  import FlowPanel from './component/flowPanel.svelte';
  import IconRoundClose from '@/assets/icon_roundClose.svelte';
  import { notyf_lt } from '@/lib/notyf';
  import { HoverView } from '@/lib/hoverView';
  // ------------------------------------------------

  /** main.js dom */
  export let _app;

  // ------------------------------------------------

  let ifMteam;

  // ------------------------------------------------
  /** 关闭 iframe */
  function closeIframe() {
    $_iframe_switch = 0;
  }

  /** esc 控制关闭所有面板 */
  function key_closePanels(event) {
    // console.log(event);
    if (event.key === 'Escape') {
      // console.log(event);
      // 关闭 iframe
      $_iframe_switch = 0;
      // 关闭侧边栏
      $_side_panel_switch = false;
      // 关闭悬浮预览大图
      if (HoverView.getInstance()) {
        HoverView.getInstance().clearPreview();
      }
    }
  }

  //  -----------⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ 主流程 ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-----------

  // ## 根据域名判断走哪些流程
  //  ###  域名检测

  // NOTE: 强制走 m-team 专用流程
  ifMteam = true;
  if (ifMteam) {
    // ## m-team 专用流程
    const app = mount(EntryMteam, {
      target: _app
    });
  }

  // ## 侧边栏
  const app = mount(FlowPanel, {
    target: _app
  });

  //  -----------⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ 主流程 ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆-----------

  // Log
  console.log('-------------->  PT_Fall Launch   <--------------');
</script>

<!-- iframe 详情 -->
{#if $_iframe_switch}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div id="_iframe" on:click={closeIframe} transition:fade={{ duration: 300 }}>
    <div class="_iframe">
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <iframe
        src={$_iframe_url}
        frameborder="0"
        title={$_iframe_url}
        style="width: 1000px;"
        on:load={e => {
          // 获取iframe的内容文档
          const iframeContent = e.target.contentDocument || e.target.contentWindow.document;

          if (!iframeContent) {
            console.error('无法访问iframe内容文档, 可能是由于跨域限制。');
            notyf_lt.error('无法访问iframe内容文档, 可能是由于跨域限制。');
            return;
          }

          // 轮询检查目标元素
          const checkElement = () => {
            const targetElement = iframeContent.querySelector('.ant-card.detail-view');

            if (targetElement) {
              // 滚动到目标元素
              targetElement.scrollIntoView({ behavior: 'smooth' });
              console.log('成功滚动到目标元素！');
              clearInterval(checkInterval);
            }
          };

          // 每500ms检查一次，直到找到元素
          const checkInterval = setInterval(checkElement, 500);

          // 首次立即检查
          checkElement();
        }}
        on:click|stopPropagation={e => {
          e.stopPropagation();
        }}
      />
      <div class="_iframeCloseBtn" on:click={closeIframe}>
        <!-- svg 关闭 icon -->
        <IconRoundClose></IconRoundClose>
      </div>
    </div>
  </div>
{/if}

<!-- NOTE: svelte 绑定 window -> 按 escape 退出各种子面板 -->
<svelte:window on:keydown|capture={key_closePanels} />

<style>
  div#_iframe {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 38, 38, 0.607);
    z-index: 30000;

    display: flex;
  }

  div._iframe {
    position: relative;
    /* width: 1246px; */
    height: 96%;
    margin: auto;
  }

  div._iframe iframe {
    height: 100%;
    border-radius: 20px;
  }

  ._iframeCloseBtn {
    width: 40px;
    height: 40px;
    background: white;

    position: absolute;

    top: 10px;
    right: 10px;

    border-radius: 40px;
    transition: all 0.5s;

    /* 悬浮 */
    &:hover {
      opacity: 0.7;
      transform: scale(1.2);
    }
    /* 点击(长按才明显) */
    &:active {
      opacity: 0.9;
      transform: scale(1.9);
    }
  }
</style>
