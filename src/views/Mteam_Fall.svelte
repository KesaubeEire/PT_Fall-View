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
  console.log('Mteam_Fall:First\t' + listContent.length);
  // console.log(listContent);

  // -----------------------------
  /** 整体更新列表信息
   * @param newInfoList
   * @param clearPage 是否清空已有瀑布流视图
   */
  export function updateList(newInfoList, clearPage = true) {
    let list = newInfoList.data;
    console.log('Mteam_Fall:New:\t' + list.length);
    // console.log(list);

    // 切页: 清空后加载
    if (clearPage) {
      clearList();
      Object.keys(list).forEach((key, index) => {
        list[key].index = index + 1;

        // 切换页面时聚焦到新的页面的第一个
        if (index == 0) list[key].pt_fall_highlight = true;
      });
      listContent = [...list];
    }
    // 不清空: 直接继续加载
    else {
      Object.keys(list).forEach((key, index) => {
        list[key].index = index + 1 + listContent.length;

        // 切换页面时聚焦到新的页面的第一个
        if (index == 0) list[key].pt_fall_highlight = true;
      });
      listContent = [...listContent, ...list];
    }
  }
  /** 清空列表信息 */
  export function clearList() {
    listContent = [];
  }

  /** 视图聚焦到某 dom
   * @param dom
   * @param {'top'|'bottom'} pos - 方向（仅允许 'top' 或 'bottom'）
   */
  function viewFocus(dom, pos) {
    if (pos == 'top') {
      dom.scrollIntoView({
        behavior: 'smooth' // 平滑滚动
        // block: 'center', // 垂直居中
        // inline: 'nearest' // 水平对齐最近边缘
      });
    }

    // 看下一页时多加几个滚屏防止懒加载干扰视图高度
    if (pos == 'bottom') {
      dom.scrollIntoView({
        behavior: 'auto', // 可选 "smooth" 平滑滚动
        block: 'end', // 垂直方向对齐到视口底部
        inline: 'nearest' // 水平方向保持默认
      });
      dom.scrollIntoView({
        behavior: 'auto', // 可选 "smooth" 平滑滚动
        block: 'end', // 垂直方向对齐到视口底部
        inline: 'nearest' // 水平方向保持默认
      });
      dom.scrollIntoView({
        behavior: 'auto', // 可选 "smooth" 平滑滚动
        block: 'end', // 垂直方向对齐到视口底部
        inline: 'nearest' // 水平方向保持默认
      });
    }
  }

  /**
   * 瀑布流对外封装: 视图聚焦
   * @param {'top'|'bottom'} pos - 方向（仅允许 'top' 或 'bottom'）
   */
  export function focusFall(pos = 'top') {
    viewFocus(fallContainer, pos);
  }
</script>

<!-- 容器元素 -->
<main bind:this={fallContainer}>
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
    border: 0px solid #6495ed;
    border-radius: 8px;
    /* background-color: rgb(188, 202, 214); */
    /* padding: 12px; */
    margin-top: 16px;

    overflow: hidden;
  }

  .text_center {
    text-align: center;
    padding: 8px 0;
    margin: 0;
  }
</style>
