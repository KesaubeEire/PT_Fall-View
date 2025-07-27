<script>
  import { Launch_Hijack } from '@/lib/hijack.js';
  import MteamFall from './Mteam_Fall.svelte';
  import { mount, onMount } from 'svelte';
  import { notyf_lt } from '@/lib/notyf.js';
  import { Tool_Watch_Dom } from '@/lib/tools.js';
  import { CONFIG } from '@/siteConfig/mteam.js';
  import { _isFallView } from '@/stores';
  import { version } from '@/../userscript.config.js';

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
  // let _ORIGIN_TL_Node = document.querySelector(CONFIG.TL_Selector);
  /** 瀑布流 dom */
  const Fall_DOM = document.createElement('div');
  Fall_DOM.classList.add('Fall_DOM');

  // ------------------------------------------
  // ## 主流程: 加载瀑布流 dom
  Tool_Watch_Dom(CONFIG.TL_Selector, launchFallView);

  // ------------------------------------------
  // ## 主流程 PT-Fall 网页顶部提示插件加载
  Tool_Watch_Dom('a[href="/index"][target="_self"]', el => {
    if (el && !document.querySelector('.ptFallReadme')) {
      // 使用 insertAdjacentHTML 在元素后插入新内容
      el.insertAdjacentHTML(
        'afterend',
        `
          <div class="ptFallReadme">
            <div class="entry_mteam">
              <div style="line-height: 1.5; text-align: center;" class="text_center">
                PT-Fall 插件 <b style="color: green; background-color: #fff8; border-radius: 5px; padding: 2px 5px;">[v${version}]</b>
                <br />
                如果没有生效可能是浏览器缓存了请求
                <br />
                尝试使用 Ctrl(Command)+Shift+R / Ctrl+F5 来强制刷新页面 ~
              </div>
            </div>
          </div>
        `
      );
    } else {
      notyf_lt.error('未找到目标链接元素');
      console.warn('未找到目标链接元素');
    }
  });

  onMount(() => {
    // ------------------------------------------
    // ## 主流程 劫持 pushState 方法
    console.log('=====> 启动劫持 pushState 方法 <=====');
    OverWritePushState();
  });

  // ------------------------------------------
  /** 主流程: 加载瀑布流视图
   * @param el 选定的种子表格根结点
   */
  function launchFallView(el) {
    if (el.parentNode) {
      // ## 插入到目标元素之上
      console.log('元素已找到，正在插入兄弟节点:', el);
      // el.parentNode.insertBefore(Fall_DOM, el);

      // ## Hijack 劫持 XHR 请求
      Launch_Hijack();
      const param = { path: '/search', method: 'POST' };
      /** 劫持请求 */
      window.addEventListener('req>POST->/search', e => {
        console.log(`<PT-Fall>[Request]  (${param.method} -> ${param.path})\n`, e.detail);

        // 请求体示例: "{"mode":"adult","categories":[],"visible":1,"pageNumber":1,"pageSize":100}"

        // // 判断是否切页
        // const payload = JSON.parse(e.detail.body);
        // if (lastRequestPayload) {
        //   isClearPage = !compareRequestPayload(lastRequestPayload, payload);
        // }
        // lastRequestPayload = payload;

        // NOTE: 这里因为改版成了内嵌在 inner 表格里的格式所以强制切页了
        isClearPage = true;

        if (isClearPage) {
          // 切页时滚动到最上方
          if (MteamFall_Svelte) MteamFall_Svelte.focusFall();
        } else {
          // 不切页时滚动到最下方
          if (MteamFall_Svelte) MteamFall_Svelte.focusFall('bottom');
        }
      });

      /** 劫持响应 */
      window.addEventListener(`res>POST->/search`, e => {
        const rawObject = JSON.parse(e.detail.data);
        console.log(`<PT-Fall>[Response] (${param.method}->${param.path})[通过事件捕获]:\n`, rawObject);

        // if (!_ORIGIN_TL_Node) {
        //   _ORIGIN_TL_Node = document.querySelector(CONFIG.TL_Selector);
        // }

        // 根据 $_isFallView 切换视图
        changeFallView($_isFallView);

        // 添加 Fall_DOM
        add_Fall_DOM(el);

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

  /** 添加 Fall_DOM
   * @param el
   */
  function add_Fall_DOM(el) {
    // 找到 el.parentNode 的 .ant-spin-nested-loading 这个子结点
    const contentNode = el.parentNode.querySelector('.ant-spin-nested-loading');

    // 给 contentNode 这个元素上一个防止触摸并透明度减半的护罩
    const shield = document.createElement('div');
    shield.id = '_shield';
    shield.style.position = 'absolute';
    shield.style.top = '0';
    shield.style.left = '0';
    shield.style.width = '100%';
    shield.style.height = '100%';
    shield.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    shield.style.zIndex = '100';
    if (!contentNode.querySelector('#_shield')) {
      contentNode.appendChild(shield);
    }

    // 在 shield 上加一个一模一样的另一个结点 Fall_DOM
    const fallHolder = document.createElement('div');
    fallHolder.id = 'fallHolder';
    fallHolder.style.position = 'absolute';
    fallHolder.style.top = '0';
    fallHolder.style.left = '0';
    fallHolder.style.width = '100%';
    fallHolder.style.minHeight = '200px';
    fallHolder.style.zIndex = '101';
    // fallHolder.style.backgroundColor = 'cyan';
    if (!contentNode.querySelector('#fallHolder')) {
      contentNode.appendChild(fallHolder);

      // 将 Fall_DOM 作为 fallHolder 的子节点添加进 DOM
      fallHolder.appendChild(Fall_DOM);
    }
  }

  /** 切换瀑布流视图
   * @param isFallView
   */
  let _mx_margin_back = ''; // 记录 margin 值, 用于切换瀑布流时还原 margin 值
  function changeFallView(isFallView) {
    // 切换瀑布流视图
    Fall_DOM.style.display = isFallView ? 'block' : 'none';
    Tool_Watch_Dom('#fallHolder', el => {
      el.style.display = isFallView ? 'block' : 'none';
    });
    Tool_Watch_Dom('#_shield', el => {
      el.style.display = isFallView ? 'block' : 'none';
    });
    Tool_Watch_Dom(CONFIG.TL_Selector + ' .mx-auto', el => {
      // console.log('===============');
      // console.log(el);
      // console.log(_mx_margin_back);
      // console.log('===============');
      if (!_mx_margin_back) _mx_margin_back = el.style.margin;
      el.style.margin = isFallView ? 0 : _mx_margin_back;
    });
  }
  window.changeFallView = changeFallView;

  //NOTE: 对有没有搜索项进行 payload 比较, 让存在搜索项的搜索单独成页
  //NOTE: 但是因为强制切页了, 所以这个功能就先搁置吧
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

  // 保存原始的 pushState 方法
  const originalPushState = history.pushState;
  /**劫持pushState方法*/
  function OverWritePushState() {
    // 重写 pushState 方法
    // @ts-ignore
    history.pushState = function (state, title, path) {
      // 在这里执行自定义逻辑
      // NOTE: 获取目标 URL Path
      // console.log("pushState ---> state:", state);
      // console.log("pushState ---> title:", title);
      console.log(`%c ====> URL跳转劫持: %c${path}`, 'color: cyan', 'color: white');

      // 判读是否在 /browse path 内, 在就进行 search api 筛选
      // @ts-ignore
      if (path.includes('/browse') || path == '/waterfall') {
        console.log(`--->属于 browse 范围: ${path}`);
        // 在 /browse 内即显示 waterfallParentNode
      } else {
        console.warn(`--->不属于 browse 范围: ${path}`);
        changeFallView(false);
      }

      // FIXME: 别动这个就行
      // 调用原始的 pushState 方法
      originalPushState.apply(history, arguments);
    };
  }
</script>
