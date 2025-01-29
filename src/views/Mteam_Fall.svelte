<!-- 根据 /search 数据生成瀑布流 -->
<script>
  import Masonry from 'svelte-bricks';
  import MteamCard from './Mteam_Card.svelte';
  import { _card_layout } from '../stores';
  import { CONFIG } from '@/siteConfig/mteam.js';

  // --------------------------------------
  /** 列表原始数据 */
  export let infoList;

  /** 列表内容数据 */
  let listContent = infoList.data;
  const listLength = listContent.length;

  /** 瀑布流 container */
  let fallContainer;

  // --------------------------------------
  // ## 处理 style
  const _current_bgColor = CONFIG.get_bg_color();

  // --------------------------------------
  // ## 给 List 上序号
  // 遍历所有子对象并添加index
  // NOTE: 这里暂时没有考虑增页
  Object.keys(listContent).forEach((key, index) => {
    listContent[key].index = index + 1;
  });

  // ## 更新 list
  $: items = [...listContent];

  // log 一下
  console.log('Mteam_Fall:First');
  console.log(listContent);

  // -----------------------------
  /** 整体更新列表信息
   * @param infoList
   */
  export function updateList(newInfoList) {
    clearList();
    let list = newInfoList.data;
    Object.keys(list).forEach((key, index) => {
      list[key].index = index + 1;
    });
    console.log('Mteam_Fall:New');
    console.log(list);
    listContent = [...list];
  }
  /** 清空列表信息 */
  export function clearList() {
    listContent = [];
  }

  /** 视图聚焦到某 dom
   * @param dom
   */
  function viewFocus(dom) {
    dom.scrollIntoView({
      behavior: 'smooth' // 平滑滚动
      // block: 'center', // 垂直居中
      // inline: 'nearest' // 水平对齐最近边缘
    });
  }

  export function focusFall() {
    viewFocus(fallContainer);
  }
</script>

<!-- 容器元素 -->
<main bind:this={fallContainer}>
  <div class="entry_mteam">
    <div class="text_center">
      这里是瀑布流位置~~
      <br />
      如果没有生效可能是浏览器缓存了请求, 尝试使用 Ctrl(Command)+Shift+R / Ctrl+F5 来强制刷新页面
    </div>
  </div>

  <div class="debug">
    <button on:click={clearList}> reset </button>
    <div>
      <input type="range" bind:value={$_card_layout.min} min="200" max={Math.max(400, $_card_layout.max)} step="1" list="values" />
      最小宽度: {$_card_layout.min}
    </div>
    <div>
      <input type="range" bind:value={$_card_layout.max} min={Math.min(200, $_card_layout.min)} max={Math.max(800, $_card_layout.min * 2)} step="1" list="values" />
      最大宽度: {$_card_layout.max}
    </div>
    <div>
      <input type="range" bind:value={$_card_layout.gap} min="0" max="100" step="1" list="values" />
      间隔: {$_card_layout.gap}
    </div>
  </div>
  <!-- <div class="inserted-sibling">我是新插入的兄弟节点</div> -->

  <div class="fall_holder" style="background-color:{_current_bgColor}">
    {#if items.length}
      <Masonry animate={true} {items} minColWidth={$_card_layout.min} maxColWidth={$_card_layout.max} gap={$_card_layout.gap} let:item>
        <MteamCard torrentInfo={item}></MteamCard>
      </Masonry>
    {:else}
      <p class="text_center">没有结果捏</p>
    {/if}
  </div>
</main>

<style>
  .fall_holder {
    border: 2px dashed #6495ed;
    border-radius: 8px;
    /* background-color: rgb(188, 202, 214); */
    padding: 12px;
    margin-top: 16px;
  }

  .text_center {
    text-align: center;
    padding: 8px 0;
    margin: 0;
  }
</style>
