<script>
  import { onMount } from 'svelte';
  import { _panelPos, _isFallView, _card_layout, _card_detail, _show_hover_pic, _iframe_switch, _side_panel_switch } from '@/stores';
  import { getSiteConfig } from '@/siteConfig';
  import { fade } from 'svelte/transition';
  import Switch from '@/component/switch.svelte';

  // ------------------------------------------------
  // ## 侧边栏功能配置
  // ------------------------------------------------
  /** 是否显示配置菜单 */
  // let isConfigMenuVisible = false;

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
  <div class="flowPanelDragger" on:mousedown={onMouseDown} role="button" tabindex="0" aria-hidden="true"></div>
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
        $_side_panel_switch = !$_side_panel_switch;
      }}
    >
      配置菜单
    </button>
    <button
      class="flowBtn"
      on:click={() => {
        window.__clearPreview();
      }}
    >
      清除悬浮预览图
    </button>
    <button
      class="flowBtn"
      on:click={() => {
        $_iframe_switch = Number(!$_iframe_switch);
      }}
    >
      iframe
    </button>
    <button class="flowBtn">debug<br />03</button>
  </div>
</div>

<!-- 配置菜单 -->
{#if $_side_panel_switch}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div class="config-menu-overlay" transition:fade={{ duration: 100 }} on:click|self={() => ($_side_panel_switch = false)}>
    <div class="config-menu" style="background-color: {getSiteConfig(location.hostname).get_bg_color()};">
      <div class="config-menu-header">
        <span style="font-size: 18px; font-weight: bold;">配置菜单</span>
        <button class="close-btn" on:click={() => ($_side_panel_switch = false)}>&times;</button>
      </div>
      <div class="config-menu-content">
        <!-- 这里添加你的配置项 -->
        <h3>卡片布局</h3>
        <div class="config-item">
          <span>最小宽度: {$_card_layout.min} px</span>
          <input type="range" bind:value={$_card_layout.min} min="200" max={Math.max(400, $_card_layout.max)} step="1" list="values" />
        </div>
        <div class="config-item">
          <span>最大宽度: {$_card_layout.max} px</span>
          <input type="range" bind:value={$_card_layout.max} min={Math.min(200, $_card_layout.min)} max={Math.max(800, $_card_layout.min * 2)} step="1" list="values" />
        </div>
        <div class="config-item">
          <span>卡片间隔: {$_card_layout.gap} px</span>
          <input type="range" bind:value={$_card_layout.gap} min="0" max="100" step="1" list="values" />
        </div>

        <!-- 显示鼠标悬浮预览大图 -->
        <div class="config-item">
          <span>显示鼠标悬浮预览大图: {$_show_hover_pic}</span>
          <Switch bind:checked={$_show_hover_pic} />
        </div>

        <h3>卡片常驻信息展示</h3>
        <!-- 添加更多配置项 -->
        <!-- 标题 -->
        <div class="config-item">
          <span>标题: {$_card_detail.title}</span>
          <Switch bind:checked={$_card_detail.title} />
        </div>

        <!-- 置顶 -->
        <div class="config-item">
          <span>置顶: {$_card_detail.topping}</span>
          <Switch bind:checked={$_card_detail.topping} />
        </div>

        <!-- 免费 -->
        <div class="config-item">
          <span>免费: {$_card_detail.free}</span>
          <Switch bind:checked={$_card_detail.free} />
        </div>

        <!-- 大小 -->
        <div class="config-item">
          <span>大小: {$_card_detail.size}</span>
          <Switch bind:checked={$_card_detail.size} />
        </div>

        <!-- 副标题 -->
        <div class="config-item">
          <span>副标题: {$_card_detail.sub_title}</span>
          <Switch bind:checked={$_card_detail.sub_title} />
        </div>

        <!-- 标签 -->
        <div class="config-item">
          <span>标签: {$_card_detail.tags}</span>
          <Switch bind:checked={$_card_detail.tags} />
        </div>

        <!-- 大小&下载&收藏 -->
        <div class="config-item">
          <span>下载&收藏: {$_card_detail.download_collect}</span>
          <Switch bind:checked={$_card_detail.download_collect} />
        </div>

        <!-- 上传时间 -->
        <div class="config-item">
          <span>上传时间: {$_card_detail.upload_time}</span>
          <Switch bind:checked={$_card_detail.upload_time} />
        </div>

        <!-- 评论/上传/下载/完成 -->
        <div class="config-item">
          <span>评论/上传/下载: {$_card_detail.statistics}</span>
          <Switch bind:checked={$_card_detail.statistics} />
        </div>
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

    font-size: 16px;

    opacity: 0.7;

    z-index: 15000;
    &:hover {
      /* background-color: #fffa; */
      opacity: 1;
    }
  }

  .flowPanelDragger {
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
    border: 2px solid rgba(255, 255, 255);
    background-color: #fff;
    opacity: 0.7;
    color: #333;
    transition: all 0.2s;

    font-size: 15px;
    font-weight: bold;

    &:hover {
      opacity: 1;
      background-color: #fffa;
      color: #444;
    }

    &:active {
      transform: translateY(4px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
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
    margin-bottom: 12px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0 8px;
    transform: translateY(-4px);
  }

  .config-menu-content {
    display: flex;
    flex-direction: column;
    gap: 4px;

    font-size: 14px;

    & h3 {
      margin-top: 8px;
    }
  }

  .config-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .config-item input {
    width: 120px;
  }
</style>
