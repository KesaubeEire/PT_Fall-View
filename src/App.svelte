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
  import { _iframe_switch, _iframe_url, _side_panel_switch, _textColor } from './stores';
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
    if (!isDragging) $_iframe_switch = 0;
  }

  // ------------------------------------------------
  /** iframe 宽度状态 */
  let iframeWidth = 1000;
  /** 是否正在拖拽调整宽度 */
  let isDragging = false;
  /** iframe 遮罩层，拖拽时显示 */
  let showOverlay = false;

  let onMouseMove = () => {};

  /** 开始拖拽调整宽度 */
  function startResize(e, direction) {
    // 记录初始状态
    const startX = e.clientX;
    const startWidth = iframeWidth;
    isDragging = true;
    showOverlay = true;
    // 禁用文本选择
    document.body.style.userSelect = 'none';

    onMouseMove = e => {
      if (!isDragging) return;

      // 计算移动距离
      const delta = e.clientX - startX;

      // 根据拖拽方向计算新宽度
      const newWidth = direction === 'right' ? startWidth + delta * 2 : startWidth - delta * 2;

      // 限制宽度范围：最小1000px，最大为窗口宽度的95%
      iframeWidth = Math.max(1000, Math.min(newWidth, window.innerWidth * 0.95));
      // console.log(`newWidth: ${newWidth}   调整后的宽度: ${iframeWidth}px`);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }

  function onMouseUp() {
    isDragging = false;
    showOverlay = false;
    // 恢复文本选择
    document.body.style.userSelect = '';
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
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
    const app = mount(EntryMteam, { target: _app });
  }

  // ## 侧边栏
  const app = mount(FlowPanel, { target: _app });

  //  -----------⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ 主流程 ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆-----------

  // Log
  console.log('-------------->  PT_Fall Launch   <--------------');
</script>

<!-- iframe 详情 -->
{#if $_iframe_switch}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div id="_iframe_holder" transition:fade={{ duration: 300 }}>
    <div class="_iframe_back" on:click|self|capture={closeIframe}></div>
    <div class="_iframe_parent" style:--textColor1={$_textColor.t1} style:--textColor2={$_textColor.t1 + '90'}>
      <!-- 左侧调整按钮 -->
      <div class="resize-handle resize-handle-left" on:mousedown={e => startResize(e, 'left')}></div>

      {#if showOverlay}
        <div class="iframe-overlay"></div>
      {/if}
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <iframe
        src={$_iframe_url}
        frameborder="0"
        title={$_iframe_url}
        style="width: {iframeWidth}px;"
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
        on:click={e => {
          onMouseUp();
          e.stopPropagation();
        }}
        on:mouseup={e => {
          onMouseUp();
        }}
      />
      <div class="_iframeCloseBtn" on:click={closeIframe}>
        <!-- svg 关闭 icon -->
        <IconRoundClose></IconRoundClose>
      </div>

      <!-- 右侧调整按钮 -->
      <div class="resize-handle resize-handle-right" on:mousedown={e => startResize(e, 'right')}></div>
    </div>
  </div>
{/if}

<!-- NOTE: svelte 绑定 window -> 按 escape 退出各种子面板 -->
<svelte:window on:keydown|capture={key_closePanels} />

<style>
  div#_iframe_holder {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 38, 38, 0.607);
    z-index: 30000;

    display: flex;
  }

  div._iframe_back {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  div._iframe_parent {
    position: relative;
    /* width: 1246px; */
    height: 96%;
    margin: auto;
    display: flex;
    align-items: center;
  }

  div._iframe_parent iframe {
    height: 100%;
    border-radius: 20px;
    user-select: none;
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

    z-index: 30001;

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

  .resize-handle {
    position: absolute;
    width: 16px;
    height: 100%;
    background: var(--textColor2);
    cursor: col-resize;
    transition: all 0.2s ease;
    z-index: 1;
    opacity: 0.4;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      opacity: 0.8;
      background: var(--textColor1);
    }
  }

  .resize-handle-left {
    left: -16px;
    border-radius: 6px 0 0 6px;
  }

  .resize-handle-right {
    right: -16px;
    border-radius: 0 6px 6px 0;
  }

  .iframe-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 30001;
    user-select: none;
  }
</style>
