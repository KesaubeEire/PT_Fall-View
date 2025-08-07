<script>
  import { Launch_Hijack } from '@/lib/hijack.js';
  import MteamFall from './Mteam_Fall.svelte';
  import Readme from '@/component/readme.svelte';
  import { mount, onMount, onDestroy } from 'svelte';
  import { notyf_lt } from '@/lib/notyf.js';
  import { Tool_Watch_Dom, getTextColor } from '@/lib/tools.js';
  import { CONFIG } from '@/siteConfig/mteam.js';
  import { _isFallView, _textColor } from '@/stores';

  // ------------------------------------------

  /** readme */
  let Readme_Svelte;
  /** MteamFall_Svelte */
  let MteamFall_Svelte;
  /** 要传下去的种子信息列表 */
  let infoList;

  /** 记录最后一次请求的 payload => 判断是否切页 */
  let lastRequestPayload;
  /** 是否切页 */
  let isClearPage = true;
  /** 是否 accept 这个 /search request */
  let isAcceptSearch = false;

  // CSS 变量监听
  let varColor_bg2 = getComputedStyle(document.documentElement).getPropertyValue('--bg-2').trim();
  let observer;

  // ------------------------------------------

  /** 主列表 dom */
  // let _ORIGIN_TL_Node = document.querySelector(CONFIG.TL_Selector);
  /** 瀑布流 dom */
  const Fall_DOM = document.createElement('div');
  Fall_DOM.classList.add('Fall_DOM');

  // ------------------------------------------
  // ## 主流程 劫持 XHR 和 Fetch 请求
  console.log('=====> 启动劫持 XHR 和 Fetch 请求 <=====');
  Launch_Hijack();

  // ------------------------------------------
  // ## 主流程: 加载瀑布流 dom
  Tool_Watch_Dom(CONFIG.TL_Selector, launchFallView);

  // ------------------------------------------
  // ## 主流程 PT-Fall 网页顶部提示插件加载
  Tool_Watch_Dom('a[href="/index"][target="_self"]', el => {
    if (!Readme_Svelte) {
      el.insertAdjacentHTML('afterend', '<div class="ptFallReadme"></div>');
      const readmeNode = el.parentNode.querySelector('.ptFallReadme');
      Readme_Svelte = mount(Readme, {
        target: readmeNode
      });
    } else {
      notyf_lt.error('未找到目标链接元素');
      console.warn('[FALL]: 未找到目标链接元素');
    }
  });

  onMount(() => {
    // 初始化 _textColor
    _changeStoreTextColor();
    // ------------------------------------------
    // ## 主流程 劫持 pushState 方法
    console.log('=====> 启动劫持 pushState 方法 <=====');
    OverWritePushState();

    // ------------------------------------------
    // ## 监听 CSS 变量 --bg-2 的变化
    observer = new MutationObserver(() => {
      const _tmpColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-2').trim();
      if (_tmpColor !== varColor_bg2) {
        varColor_bg2 = _tmpColor;

        console.log('--bg-2 变化:', varColor_bg2);
        // notyf_lt.open({
        //   type: 'warning',
        //   message: `--bg-2 变化: ${varColor_bg2}`
        // });

        _changeStoreTextColor();
      }
    });

    // 监听 document.documentElement 的属性变化
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style', 'class', 'data-theme'] // 监听可能影响 CSS 变量的属性
    });
  });

  onDestroy(() => {
    // 销毁 Readme_Svelte
    if (observer) observer.disconnect();

    pageDestroy();
  });

  // ------------------------------------------
  // 复制 .ant-pagination 元素到 Fall_DOM
  let pagination;
  let pageFather;
  $: if (Fall_DOM) {
    if ($_isFallView && pagination) {
      // 将分页控件添加到 Fall_DOM
      Fall_DOM.appendChild(pagination);
    }

    if (!$_isFallView && pagination && pageFather) {
      // 将分页控件添加到 Fall_DOM
      pageFather.appendChild(pagination);
    }
  }

  /** 页面初始化: 监听 .ant-pagination 元素 */
  function pageInit() {
    Tool_Watch_Dom('.ant-pagination', el => {
      if (el && el.parentNode && el.parentNode !== Fall_DOM) {
        pageFather = el.parentNode;
      }

      if (el) {
        pagination = el;
        if ($_isFallView) {
          // 将分页控件添加到 Fall_DOM
          Fall_DOM.appendChild(pagination);
        }
      }
    });
  }

  /** 页面销毁: 移除 .ant-pagination 元素 */
  function pageDestroy() {
    if (pagination && pagination.parentNode) {
      pagination.parentNode.removeChild(pagination);
      // pagination = null;
    }
  }

  // ------------------------------------------
  /** 主流程: 加载瀑布流视图
   * @param el 选定的种子表格根结点
   */
  function launchFallView(el) {
    if (el.parentNode) {
      // ## 插入到目标元素之上
      console.log('元素已找到，正在插入兄弟节点:', el);
      // el.parentNode.insertBefore(Fall_DOM, el);

      const param = { path: '/search', method: 'POST' };

      /** 劫持请求 */
      window.addEventListener('req>POST->/search', e => {
        console.log(`<PT-Fall>[Request]  (${param.method} -> ${param.path})\n`, e.detail);

        // NOTE: 这里判断下 url 是否包含 /api/torrent/search, 包含就接受, 不包含就拒绝
        // console.log(e.detail.url);
        if (e.detail.url.includes('api/torrent/search') && !e.detail.body.includes('"mode":"waterfall"')) {
          isAcceptSearch = true;
        } else {
          isAcceptSearch = false;
        }

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

        // 移除 .ant-pagination 元素
        pageDestroy();
      });

      /** 劫持响应 */
      window.addEventListener(`res>POST->/search`, e => {
        const rawObject = JSON.parse(e.detail.data);

        // 请求如果被判断为不是需要的 /search (非种子列表的请求), 就不响应
        if (!isAcceptSearch) {
          // notyf_lt.open({ type: 'warning', message: '> 本 /search 没有被接受!', position: { x: 'right', y: 'top' } });
          console.warn(`<PT-Fall>[未被接受的Response] (${param.method}->${param.path})[通过事件捕获]:\n`, rawObject);
          return;
        }

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

        // 移动 .ant-pagination 元素
        pageInit();
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

    // 点击 #_shield 弹一个带确认和取消按钮的 modal 框
    shield.addEventListener('click', () => {
      // NOTE: 用 confirm 试了下, 发现 confirm 是阻塞的, 导致页面会卡住, 所以还是用个 modal 框吧
      if (confirm('[PT-Fall]\n如果你认为你被阻挡了请点击确认\n这个阻挡效果会被取消\n这可能导致显示错误\n请确认您不在一般的瀑布流视图下\n比如您在逛论坛或者在发种之类的被遮挡了再点')) {
        shield.style.display = 'none';
      }
    });

    if (!contentNode.querySelector('#_shield')) {
      contentNode.appendChild(shield);
    }

    // 在 shield 上加一个一模一样的另一个结点 Fall_DOM
    const fallHolder = document.createElement('div');
    fallHolder.id = '_fallHolder';

    if (!contentNode.querySelector('#_fallHolder')) {
      contentNode.appendChild(fallHolder);

      // 将 Fall_DOM 作为 fallHolder 的子节点添加进 DOM
      fallHolder.appendChild(Fall_DOM);
    }
  }

  /** 切换瀑布流视图
   * @param isFallView
   */
  let _mx_margin_back = ''; // 旧风格记录 margin 值, 用于切换瀑布流时还原 margin 值
  let _mx_next_max_width = ''; // next 风格记录 maxWidth 值, 用于切换瀑布流时还原 maxWidth 值
  let _mx_next_padding = ''; // next 风格记录 padding-left 值, 用于切换瀑布流时还原 padding-left 值
  function changeFallView(isFallView) {
    // 切换瀑布流视图
    Fall_DOM.style.display = isFallView ? 'block' : 'none';
    Tool_Watch_Dom('#_fallHolder', el => {
      el.style.display = isFallView ? 'block' : 'none';
    });
    Tool_Watch_Dom('#_shield', el => {
      el.style.display = isFallView ? 'block' : 'none';
    });

    // 新风格
    Tool_Watch_Dom(CONFIG.TL_Selector + '.flex', el => {
      if (!_mx_next_max_width) {
        _mx_next_max_width = getComputedStyle(el).getPropertyValue('max-width');
        _mx_next_padding = getComputedStyle(el).getPropertyValue('padding-left');
      }
      el.style.maxWidth = isFallView ? 'none' : _mx_next_max_width;
      el.style.paddingLeft = isFallView ? '80px' : _mx_next_padding;
      el.style.paddingRight = isFallView ? '80px' : _mx_next_padding;
    });

    // 旧风格
    Tool_Watch_Dom(CONFIG.TL_Selector + ' .mx-auto', el => {
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
        console.warn(`[FALL]: --->不属于 browse 范围: ${path}`);
        changeFallView(false);
      }

      // FIXME: 别动这个就行
      // 调用原始的 pushState 方法
      originalPushState.apply(history, arguments);
    };
  }

  // ------------------------------------------
  /** 获取 CSS 变量值
   * @param varName
   */
  function getVar(varName) {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  /** 改变 _textColor 的值
   * @param color
   */
  function _changeStoreTextColor() {
    $_textColor.t1 = getTextColor(getVar('--bg-1'));
    $_textColor.t2 = getTextColor(getVar('--bg-2'));
    $_textColor.t3 = getTextColor(getVar('--bg-3'));
  }
</script>
