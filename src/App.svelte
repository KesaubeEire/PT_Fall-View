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
  import { Tool_Watch_Dom } from './lib/tools.js';
  import EntryMteam from './views/Entry_Mteam.svelte';

  // NOTE: 假设这里是 m-team 专用流程

  //  -----------⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇ 主流程 ⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇⬇-----------

  // ## m-team 专用流程
  // 拿到主列表 div
  const _ORIGIN_TL_Node = document.querySelector('div.app-content__inner');
  // 创建瀑布流 div
  const TL_Node = document.createElement('div');
  // 加上同等的瀑布流 div
  Tool_Watch_Dom('div.app-content__inner', insertSibling);

  //  -----------⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆ 主流程 ⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆⬆-----------

  // 封装插入逻辑
  function insertSibling(el) {
    // 插入到目标元素之前
    if (el.parentNode) {
      console.log('元素已找到，正在插入兄弟节点:', el);
      el.parentNode.insertBefore(TL_Node, el);
      const app = mount(EntryMteam, {
        target: TL_Node,
        props: { _ORIGIN_TL_Node }
      });
    } else {
      console.error('无法插入：目标元素没有父节点');
    }
  }

  // Log
  console.log('-------------->  ' + new Date() + '  <--------------');
</script>
