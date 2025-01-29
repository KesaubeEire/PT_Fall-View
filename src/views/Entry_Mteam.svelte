<script>
  import { Launch_Hijack } from '@/lib/hijack.js';
  import MteamFall from './Mteam_Fall.svelte';
  import { mount } from 'svelte';
  import { notyf_lt } from '@/lib/notyf.js';
  import { Tool_Watch_Dom } from '@/lib/tools.js';
  import { CONFIG } from '@/siteConfig/mteam.js';

  // ------------------------------------------

  /** MteamFall_Svelte */
  let MteamFall_Svelte;
  /** 要传下去的种子信息列表*/
  let infoList;

  // ------------------------------------------

  /** 主列表 dom */
  let _ORIGIN_TL_Node = document.querySelector(CONFIG.TL_Selector);
  /** 瀑布流 dom */
  const Fall_DOM = document.createElement('div');
  Fall_DOM.classList.add('Fall_DOM');
  // 加上同等的瀑布流 dom
  Tool_Watch_Dom(CONFIG.TL_Selector, launchFallView);

  // ------------------------------------------
  /** 主流程: 启动瀑布流视图
   */
  function launchFallView(el) {
    if (el.parentNode) {
      // ## 插入到目标元素之上
      console.log('元素已找到，正在插入兄弟节点:', el);
      el.parentNode.insertBefore(Fall_DOM, el);

      // ## Hijack 劫持 XHR 请求
      Launch_Hijack();
      const param = { path: '/search', method: 'POST' };
      window.addEventListener(`${param.method}->${param.path}`, e => {
        const rawObject = JSON.parse(e.detail.data);
        console.log(`<PT-Fall>[Response] (${param.method}->${param.path})[通过事件捕获]:\n`, rawObject);

        if (!_ORIGIN_TL_Node) {
          _ORIGIN_TL_Node = document.querySelector('div.app-content__inner');
        }
        _ORIGIN_TL_Node.style.display = 'none';

        notyf_lt.success('捕获到 /search !');

        // ## 整理 response 数据并格式化
        infoList = rawObject.data;

        // ## 判断是增页触发还是切换触发
        //    区别在于需不需要重置瀑布流
        // NOTE: 此阶段暂时只处理切换触发
        if (MteamFall_Svelte) {
          // ------------------
          // NOTE: 卸载组件重新安装, 我觉得不如直接重载瀑布流组件信息
          // unmount(MteamFall_Svelte, { outro: false });
          // ------------------

          // 重载瀑布流组件信息
          MteamFall_Svelte.updateList(infoList);
        } else {
          // 初次启动加载瀑布流组件
          MteamFall_Svelte = mount(MteamFall, {
            target: Fall_DOM,
            props: { infoList }
          });
        }
      });
    } else {
      notyf_lt.error('找不到指定节点\n若总是如此请报告bug');
      console.error('无法插入：目标元素没有父节点');
    }
  }
</script>
