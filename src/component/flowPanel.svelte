<script>
  import { onMount } from 'svelte';
  import { _panelPos, _isFallView } from '../stores';
  import { getSiteConfig } from '@/siteConfig';
  import { fade } from 'svelte/transition';

  // ------------------------------------------------
  // ## 侧边栏功能配置
  // ------------------------------------------------
  /** 是否显示配置菜单 */
  let isConfigMenuVisible = false;

  // ------------------------------------------------
  // ## 配置拖拽侧边栏
  // ------------------------------------------------
  /** 悬浮窗的 dom 对象 */
  let flowPanel;
  /** 是否触发移动 trigger */
  let isMouseDown = false;
  /** 侧边栏横坐标 */
  let offsetX = 0;
  /** 侧边栏纵坐标 */
  let offsetY = 0;

  // NOTE: 记得这里上 Store 进 localstorage
  /** 拖拽边栏位置 */
  // let $_panelPos = { x: 0, y: 0 };

  /** 给指定变量设置上下范围
   * @param target 指定变量
   * @param min 下边界值
   * @param max 上边界值
   */
  function posRangeIn(target, min, max) {
    if (target <= min) target = min;
    if (target >= max) target = max;
    return target;
  }

  const onMouseDown = e => {
    e.preventDefault();
    isMouseDown = true;
    offsetX = e.clientX - flowPanel.getBoundingClientRect().left;
    offsetY = e.clientY - flowPanel.getBoundingClientRect().top;
  };

  const onMouseMove = e => {
    // NOTE: 这里还是别取消这个, 会指针指在别的地方的
    // e.preventDefault();

    if (!isMouseDown) return;
    const res_X = posRangeIn(e.clientX - offsetX, 0, window.innerWidth - (flowPanel.getBoundingClientRect().width + 5));
    const res_Y = posRangeIn(e.clientY - offsetY, 0, window.innerHeight - (flowPanel.getBoundingClientRect().height + 5));
    $_panelPos = { x: res_X, y: res_Y };
  };

  const onMouseUp = () => {
    isMouseDown = false;
  };

  /** 重置瀑布流边栏位置 */
  function resetPanelPos() {
    if ($_panelPos.x == 0 && $_panelPos.y == 0) alert('无需重置瀑布流边栏位置');
    $_panelPos = { x: 0, y: 0 };
  }

  onMount(() => {
    // 拖拽边栏监听
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  });
</script>

<!-- 悬浮按钮:可拖拽  -->
<div class="flowPanel" bind:this={flowPanel} style="top:{$_panelPos.y}px; left:{$_panelPos.x}px;}">
  <div class="flowPanelDrager" on:mousedown={onMouseDown} role="button" tabindex="0" aria-hidden="true"></div>
  <div class="flowPanelHolder">
    <button
      class="flowBtn"
      on:click={() => {
        $_isFallView = !$_isFallView;
        window.changeFallView($_isFallView);
      }}
    >
      切换显示
    </button>
    <button
      class="flowBtn"
      on:click={() => {
        isConfigMenuVisible = !isConfigMenuVisible;
      }}
    >
      配置菜单
    </button>
    <button class="flowBtn">debug01</button>
    <button class="flowBtn">debug02</button>
    <button class="flowBtn">debug03</button>
  </div>
</div>

<!-- 配置菜单 -->
{#if isConfigMenuVisible}
  <div class="config-menu-overlay" transition:fade={{ duration: 100 }} on:click|self={() => (isConfigMenuVisible = false)} role="button" tabindex="0" aria-hidden="true" inert>
    <div class="config-menu" style="background-color: {getSiteConfig(location.hostname).get_bg_color()};">
      <div class="config-menu-header">
        <h3>配置菜单</h3>
        <button class="close-btn" on:click={() => (isConfigMenuVisible = false)}>&times;</button>
      </div>
      <div class="config-menu-content">
        <!-- 这里添加你的配置项 -->
        <!-- 添加更多配置项 -->
      </div>
    </div>
  </div>
{/if}

<style>
  .flowPanel {
    position: fixed;

    width: 80px;
    max-height: 300px;

    border-radius: 12px;
    overflow: hidden;

    padding-bottom: 8px;
    padding: 0px 2px 8px;

    background-color: #fff4;
    transition: background-color 0.2s;
    transition: opacity 0.2s;

    font-size: 14px;

    opacity: 0.7;
    &:hover {
      /* background-color: #fffa; */
      opacity: 1;
    }
  }

  .flowPanelDrager {
    height: 12px;
    background-color: #d9ff00a9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    &:hover {
      cursor: move; /* 设置鼠标悬停时的图标为移动 */
    }
  }

  .flowPanelHolder {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  /* .flowBtn {
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.2s;

    &:hover {
      background-color: #fffa;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(10px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    border: 2px solid rgba(255, 255, 255, 0.5);
  } */

  .flowBtn {
    padding: 4px;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.5);
    background-color: #fff;
    opacity: 0.7;
    color: #333;
    transition: all 0.2s;

    &:hover {
      opacity: 1;
      background-color: #fffa;
      color: #444;
    }

    &:active {
      transform: translateY(4px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    /* @media (prefers-color-scheme: dark) {
      background-color: #2a2a2a;
      color: #ffffff;

      &:hover {
        background-color: #3a3a3a;
        color: #ffffff;
      }
    } */
  }

  /* 配置菜单样式 */
  .config-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: flex-end;
    z-index: 20000;
  }

  :global(.config-menu-overlay:not(:global(:first-child))) {
    opacity: 0;
    transform: translateX(10px);
    transition:
      opacity 0.3s ease-in-out,
      transform 0.3s ease-in-out;
  }

  .config-menu {
    background-color: #ffffff;
    width: 300px;
    height: 100vh;
    padding: 20px;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
  }

  .config-menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0 8px;
  }

  .config-menu-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .config-item {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .config-item label {
    width: 100px;
  }

  .config-item input {
    flex: 1;
    padding: 6px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
</style>
