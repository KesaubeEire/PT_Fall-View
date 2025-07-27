<script>
  import { version } from '@/../userscript.config.js';
  import { fade } from 'svelte/transition';
  import { _isFallView } from '@/stores';

  let showModal = false;

  function openModal() {
    showModal = true;
  }

  function closeModal() {
    showModal = false;
  }

  let color;
  $: color = $_isFallView ? '#4ff74f' : 'yellow';
</script>

<div class="entry_mteam">
  <div class="ant-typography" style="line-height: 1.5; text-align: center;">
    <span class="faq-btn" style:--hover="green">PT-Fall 插件 <span style:color style="font-weight: 600;">[v{version}]</span></span>
    <span class="faq-btn" style:--hover="#40a9ff" style="cursor: pointer;" on:click={openModal} role="button" aria-hidden="true">常见问题 FAQ</span>
  </div>
</div>

<!-- FAQ 弹窗 -->
{#if showModal}
  <div class="modal-overlay" transition:fade={{ duration: 200 }} on:click={closeModal} role="button" aria-hidden="true">
    <div class="modal-content" on:click|stopPropagation role="button" aria-hidden="true">
      <div class="modal-header">
        <h3>FAQ - 常见问题</h3>
        <button class="close-btn" on:click={closeModal}>&times;</button>
      </div>
      <div class="modal-body">
        <h4>Q: 插件没有生效怎么办？</h4>
        <p>A: 可能是浏览器缓存了请求，尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面。</p>

        <h4>Q: 如何切换瀑布流视图？</h4>
        <p>A: 点击悬浮面板中的"切换显示"按钮即可在瀑布流和原列表视图间切换。</p>

        <h4>Q: 如何调整卡片布局？</h4>
        <p>A: 点击悬浮面板中的"配置菜单"按钮，可以调整卡片的最小/最大宽度、间隔等参数。</p>
      </div>
    </div>
  </div>
{/if}

<!-- NOTE: esc 关闭弹窗 -->
<svelte:window
  on:keydown|capture={event => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }}
/>

<style>
  .faq-btn {
    background-color: var(--bg-2);
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .faq-btn:hover {
    background-color: var(--hover);
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 25000;
  }

  .modal-content {
    background: var(--bg-3);
    border-radius: 8px;
    width: 500px;
    max-width: 90vw;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    border-bottom: 1px solid #f0f0f0;
  }

  .modal-header h3 {
    margin: 0;
    font-size: 16px;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-body {
    padding: 20px;
    line-height: 1.6;
  }

  .modal-body h4 {
    margin: 16px 0 8px 0;
    color: #1890ff;
  }

  .modal-body p {
    margin: 0 0 12px 0;
    color: #666;
  }
</style>
