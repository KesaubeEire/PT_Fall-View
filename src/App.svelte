<!-- 
  脚本整体结构思路:
  1. 判断 host -> 不同的域名走不同的框架
  2. 判断 path -> 在指定的 path 下进行读取种子列表操作
  3. 渲染 bricks

  具体流程
  0. 准备好 下一页按钮 / 悬浮岛 / 选项侧边栏 / modal层
  1. 主流程: 
    1.1 将 host 分流
    1.2 拿到主列表的 div, 加上同等的瀑布流 div, 隐藏之并提供切换
    1.3 拿到种子列表详细数据, 填成 bricks 放进瀑布流 div 里
-->
<script>
  import { mount } from 'svelte';
  import EntryMteam from './views/Entry_Mteam.svelte';

  // ------------------------------------------------

  /** main.js dom */
  export let _app;

  // ------------------------------------------------

  let ifMteam;

  //  -----------⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ 主流程 ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-----------

  // ## 根据域名判断走哪些流程
  //  ###  域名检测

  // NOTE: 强制走 m-team 专用流程
  ifMteam = true;
  if (ifMteam) {
    // ## m-team 专用流程
    const app = mount(EntryMteam, {
      target: _app
    });
  }

  //  -----------⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ 主流程 ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆-----------

  // Log
  console.log('-------------->  PT_Fall Launch   <--------------');
</script>
