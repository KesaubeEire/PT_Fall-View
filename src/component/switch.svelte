<script>
  export let checked = false;

  function handleClick() {
    checked = !checked;
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="switch-container" on:click={handleClick}>
  <div class="switch-background">
    <!-- svelte-ignore element_invalid_self_closing_tag -->
    <div class="switch-slider" class:checked />
  </div>
</div>

<style>
  .switch-container {
    display: inline-block;
    cursor: pointer;
  }

  .switch-background {
    position: relative;
    width: 48px;
    height: 24px;
    background-color: #e0e0e0;
    border-radius: 12px;
    transition: background-color 0.2s;
  }

  .switch-slider {
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    top: 2px;
    left: 2px;
    transition: all 0.2s;
  }

  .switch-slider.checked {
    transform: translateX(24px);
    /* // 添加蓝色背景 */
    background-color: #2196f3;
  }

  .switch-background:hover {
    background-color: #d0d0d0;
  }

  .switch-container:active .switch-slider {
    transform: translateX(24px) scale(0.95);
  }
</style>
