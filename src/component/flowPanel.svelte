<script>
  import { onMount } from 'svelte';
  import { _panelPos } from '../stores';
  import { _isFallView } from '../stores';

  // ------------------------------------------------
  // ## 侧边栏功能配置
  // ------------------------------------------------

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
      }}>切换显示</button
    >
    <button class="flowBtn">配置菜单</button>
    <button class="flowBtn">debug01</button>
    <button class="flowBtn">debug02</button>
    <button class="flowBtn">debug03</button>
  </div>
</div>

<style>
  .flowPanel {
    position: fixed;

    width: 80px;
    max-height: 200px;

    border-radius: 12px;
    overflow: hidden;

    padding-bottom: 8px;
    padding: 0px 2px 8px;

    background-color: #fff4;
    transition: background-color 0.2s;
    &:hover {
      background-color: #fffa;
    }
  }

  .flowPanelDrager {
    height: 12px;
    background-color: #d9ff00a9;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    &:hover {
      cursor: grab; /* 设置鼠标悬停时的图标为移动 */
    }
  }

  .flowPanelHolder {
    /* position: relative; */
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .flowBtn {
    padding: 4px;
    border-radius: 4px;
    background-color: #fff;
    transition: all 0.2s;
    &:hover {
      background-color: #fffa;
    }
  }
</style>
