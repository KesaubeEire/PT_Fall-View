<script>
  import { version } from '@/../userscript.config.js';
  import { fade } from 'svelte/transition';
  import { _isFallView, _panelPos, _textColor } from '@/stores';
  import IconTelegram from '@/assets/icon_telegram.svelte';

  let _modalFAQ = false;
  let _modalAbout = false;

  function openFAQ() {
    _modalFAQ = true;
  }

  function closeFAQ() {
    _modalFAQ = false;
  }

  function openAbout() {
    _modalAbout = true;
  }

  function closeAbout() {
    _modalAbout = false;
  }

  let color;
  $: color = $_isFallView ? '#4ff74f' : 'yellow';
</script>

<div class="entry_mteam">
  <div class="ant-typography" style="line-height: 1.5; text-align: center;">
    <button class="__btn" id="_ptFall_about" style:--hover="green" style={`color: ${$_textColor.t2}`} on:click={openAbout}>PT-Fall<br /><span style:color style="font-weight: 600;">[v{version}]</span></button>
    <button class="__btn" id="_ptFall_faq" style:--hover="#40a9ff" style={`color: ${$_textColor.t2}`} on:click={openFAQ}>常见问题<br />FAQ</button>
  </div>
</div>

<!-- about 弹窗 -->
{#if _modalAbout}
  <div class="modal-overlay" transition:fade={{ duration: 200 }} on:click={closeAbout} role="button" aria-hidden="true">
    <div class="modal-content" style={`color: ${$_textColor.t3}`} on:click|stopPropagation role="button" aria-hidden="true">
      <div class="modal-header">
        <h3>关于 PT-Fall</h3>
        <button class="close-btn" on:click={closeAbout}>&times;</button>
      </div>
      <div class="modal-body">
        <h4>PT-Fall 是一个专为 M-team 站点量身定制的瀑布流视图插件</h4>

        <!-- github 地址和 greaseFork 地址 -->
        <p>Github: <a href="https://github.com/KesaubeEire/PT_Fall-View" target="_blank">https://github.com/KesaubeEire/PT_Fall-View</a></p>
        <p>GreaseFork: <a href="https://greasyfork.org/zh-CN/scripts/543925" target="_blank">https://greasyfork.org/zh-CN/scripts/543925</a></p>
      </div>
    </div>
  </div>
{/if}

<!-- FAQ 弹窗 -->
{#if _modalFAQ}
  <div class="modal-overlay" transition:fade={{ duration: 200 }} on:click={closeFAQ} role="button" aria-hidden="true">
    <div class="modal-content" style={`color: ${$_textColor.t3}`} on:click|stopPropagation role="button" aria-hidden="true">
      <div class="modal-header">
        <h3>FAQ - 常见问题</h3>
        <button class="close-btn" on:click={closeFAQ}>&times;</button>
      </div>
      <div class="modal-body">
        <h4>Q: 如何联系反馈问题</h4>
        <p>
          <a style:--hover="#40a9ff" class="__btn __btnWide" style={`color: ${$_textColor.t2}`} href="https://t.me/+Nd_qIisDjQ80ZTc9" target="_blank"> <IconTelegram height={24} width={24} /> &nbsp;Telegram</a>
        </p>

        <h4>Q: 找不到悬浮框</h4>
        <button
          style:--hover="#40a9ff"
          class="__btn"
          style={`color: ${$_textColor.t2}`}
          on:click={() => {
            $_panelPos = { x: 0, y: 0 };
          }}
        >
          重置悬浮框位置
        </button>
        <p>
          <br />可以通过拖拽悬浮框顶部的颜色条来移动悬浮框的位置
          <br />从 PTPP 那里来的灵感 ( 感恩 ||T|| 佬 )
        </p>

        <h4>Q: 插件没有生效怎么办</h4>
        <p>可能是浏览器缓存了请求<br />尝试使用 Ctrl+Shift+R / Ctrl+F5 强制刷新页面</p>

        <h4>Q: 如何切换瀑布流视图</h4>
        <p>点击悬浮面板中的第一个图标(瀑布/列表)按钮<br />即可在瀑布流和原列表视图间切换</p>

        <h4>Q: 如何调整卡片布局</h4>
        <p>点击悬浮面板中的"配置"按钮<br />可以调整卡片的最小 / 最大宽度、间隔等参数</p>

        <h4>Q: 快捷键</h4>
        <p><span class="modal-code" style={`color: ${$_textColor.t1}`}>x</span> 可以切换瀑布流视图</p>
        <p><span class="modal-code" style={`color: ${$_textColor.t1}`}>ESC</span> 可以从 次级菜单 / 配置菜单 / iframe 中退出</p>

        <h4>Q: 深色模式颜色有些不对劲怎么办?</h4>
        <p>先刷新一下试试, 有些字体颜色不能即时更改<br />刷新后就可以了<br />还有颜色不对劲的 telegram 上截图告诉我</p>
      </div>
    </div>
  </div>
{/if}

<!-- NOTE: esc 关闭弹窗 -->
<svelte:window
  on:keydown|capture={event => {
    if (event.key === 'Escape') {
      closeFAQ();
      closeAbout();
    }
  }}
/>

<style>
  .__btn {
    background-color: var(--bg-2);
    color: white;
    border: none;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 14px;
    transition: background-color 0.3s;
    cursor: pointer;
  }

  .__btnWide {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .__btn:hover {
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
    border: 4px solid var(--bg-2);
    /* padding: 12px; */
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
    border-bottom: 4px solid var(--bg-2);
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
    padding: 0px 20px 10px;
    line-height: 1.6;
  }

  .modal-body h4 {
    margin: 16px 0 8px 0;
    color: #1890ff;
  }

  .modal-body p {
    margin: 0 0 12px 0;
  }

  .modal-code {
    background-color: var(--bg-1);
    padding: 4px;
    border-radius: 4px;
  }
</style>
