<!-- 根据 /search 数据生成瀑布流 -->
<script>
  import Masonry from 'svelte-bricks';
  import MteamCard from './Mteam_Card.svelte';
  import { _card_layout } from '../stores';

  export let infoList;

  let listContent = infoList.data;
  const listLength = listContent.length;
  // ## 给 List 上序号
  // 遍历所有子对象并添加index
  // NOTE: 这里暂时没有考虑增页
  Object.keys(listContent).forEach((key, index) => {
    listContent[key].index = index + 1;
  });

  // ## 更新 list
  $: items = [...listContent];

  // log 一下
  console.log('Mteam_Fall');
  console.log(listContent);

  // -----------------------------
  /**
   * 整体更新列表信息
   * @param infoList
   */
  export function updateList(newInfoList) {
    clearList();
    let list = newInfoList.data;
    Object.keys(list).forEach((key, index) => {
      list[key].index = index + 1;
    });
    console.log('new list');
    console.log(list);
    listContent = [...list];
  }
  /** 清空列表信息 */
  export function clearList() {
    listContent = [];
  }
</script>

<main>
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

  <Masonry {items} minColWidth={$_card_layout.min} maxColWidth={$_card_layout.max} gap={$_card_layout.gap} let:item>
    <MteamCard torrentInfo={item}></MteamCard>
  </Masonry>
</main>

<style>
  main {
    border: 2px dashed #6495ed;
    border-radius: 8px;
    background-color: rgb(188, 202, 214);
    padding: 12px;
  }
  .inserted-sibling {
    padding: 15px;
    background: #f0f8ff;
    border: 2px dashed #6495ed;
    margin-bottom: 10px;
  }
</style>
