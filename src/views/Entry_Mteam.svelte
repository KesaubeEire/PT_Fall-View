<script>
  import { Launch_Hijack } from '@/lib/hijack.js';
  import MteamFall from './Mteam_Fall.svelte';
  import { mount, onMount, unmount } from 'svelte';

  // ------------------------------------------

  /** 主列表 dom */
  export let _ORIGIN_TL_Node;

  // ------------------------------------------

  /** this Dom */
  let container;
  /** MteamFall_Svelte */
  let MteamFall_Svelte;
  /** 要传下去的种子信息列表*/
  let infoList;

  // ------------------------------------------
  // _ORIGIN_TL_Node.style.display = 'none';

  onMount(() => {
    // ## Hijack 劫持 XHR 请求
    Launch_Hijack();
    const param = { path: '/search', method: 'POST' };
    window.addEventListener(`${param.method}->${param.path}`, e => {
      const rawObject = JSON.parse(e.detail.data);
      console.log(`<PT-Fall>[Response] (${param.method}->${param.path})[通过事件捕获]:\n`, rawObject);

      _ORIGIN_TL_Node.style.display = 'none';

      // ## 整理 response 数据并格式化
      infoList = rawObject.data;

      // ## 判断是增页触发还是切换触发
      //    区别在于需不需要重置瀑布流
      // NOTE: 此阶段暂时只处理切换触发
      if (MteamFall_Svelte) unmount(MteamFall_Svelte, { outro: false });
      MteamFall_Svelte = mount(MteamFall, {
        target: container,
        props: { infoList }
      });
    });
  });
</script>

<!-- 容器元素 -->
<div bind:this={container} class="entry_mteam">
  <div style="text-align: center; padding: 10px 0;">这里是瀑布流位置~~</div>
</div>
