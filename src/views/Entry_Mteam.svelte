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
  /** 要传下去的种子信息列表 */
  let infoList;

  /** 记录最后一次请求的 payload => 判断是否切页 */
  let lastRequestPayload;
  /** 是否切页 */
  let isClearPage = true;

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
      /** 劫持请求 */
      window.addEventListener('req>POST->/search', e => {
        console.log(`<PT-Fall>[Request]  (${param.method} -> ${param.path})\n`, e.detail);

        // 请求体示例: "{"mode":"adult","categories":[],"visible":1,"pageNumber":1,"pageSize":100}"

        // 判断是否切页
        const payload = JSON.parse(e.detail.body);
        if (lastRequestPayload) {
          isClearPage = !compareRequestPayload(lastRequestPayload, payload);
        }
        lastRequestPayload = payload;
        if (isClearPage) {
          // 切页时滚动到最上方
          if (MteamFall_Svelte) MteamFall_Svelte.focusFall();
        } else {
          // 不切页时滚动到最下方
          if (MteamFall_Svelte) MteamFall_Svelte.focusFall('bottom');
        }

        // NOTE: 是否切页的 Notyf Log, 记得注释了
        // isClearPage ? notyf_lt.success('切') : notyf_lt.error('不切');
      });

      /** 劫持响应 */
      window.addEventListener(`res>POST->/search`, e => {
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
        if (MteamFall_Svelte) {
          // 重载瀑布流组件信息
          MteamFall_Svelte.updateList(infoList, isClearPage);
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

  /** 比较两次提交 payload => 用以判断是否需要切页还是往下继续生成 bricks
   * @param last
   * @param current
   */
  function compareRequestPayload(last, current) {
    // 比较 mode 和 categories 是否严格相同
    const isSameMode = last.mode === current.mode;

    // 使用 JSON.stringify 比较数组内容（包含顺序）
    const isSameCategories = JSON.stringify(last.categories) === JSON.stringify(current.categories);

    // 比较 pageNumber 是否不同
    const isDifferentPage = last.pageNumber !== current.pageNumber;

    return isSameMode && isSameCategories && isDifferentPage;
  }
</script>
