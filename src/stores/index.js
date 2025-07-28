import { writable } from 'svelte/store';

// ----------------------------------------------------------------
// localstorage 持久化处理 -------------------------------------
/**localstorage 里瀑布流字段对象的 key 名称*/
const PERSIST_NAME = 'Kesa:Fall';

/**
 * 辅助函数封装 localStorage 操作
 * @returns
 */
const getPersistedData = () => {
  try {
    return JSON.parse(localStorage.getItem(PERSIST_NAME)) ?? {};
  } catch {
    return {};
  }
};

/**
 * 数据持久化 svelte stores 函数
 * @param {*} key 在 localstorage 瀑布流对象里的 key 值
 * @param {*} initialValue 初始化默认值
 * @returns
 */
const persistStore = (key, initialValue) => {
  // 初始化存储值
  const persisted = getPersistedData();
  const savedValue = key in persisted ? persisted[key] : initialValue;

  // 创建响应式存储
  const { subscribe, set, update } = writable(savedValue);

  // 自动持久化订阅
  subscribe(value => {
    const data = getPersistedData();
    localStorage.setItem(PERSIST_NAME, JSON.stringify({ ...data, [key]: value }));
  });

  return {
    subscribe,
    set: value => {
      if (typeof value === 'function') {
        update(value);
      } else {
        set(value);
      }
    },
    update
  };
};

// ----------------------------------------------------------------
/** iframe 开关 */
export const _iframe_switch = writable(0);
/** iframe 网址 */
export const _iframe_url = writable('');

// ----------------------------------------------------------------
/** 是否为瀑布流视图 */
export const _isFallView = persistStore('_isFallView', true);

// ----------------------------------------------------------------
/** 测边栏 toggle */
export const _side_panel_switch = writable(0);

/** 拖拽边栏位置 */
export const _panelPos = persistStore('_panelPos', { x: 0, y: 0 });

/** 是否显示鼠标悬浮预览大图 */
export const _show_hover_pic = persistStore('_show_hover_pic', 1);

/** 卡片布局参数 */
export const _card_layout = persistStore('_card_layout', {
  // 最小宽度
  min: 240,
  // 最大宽度
  max: 400,
  // 间距
  gap: 12
});

/** 卡片常驻显示参数 */
export const _card_detail = persistStore('_card_detail', {
  // 全局总开关
  all: false,

  // 显示 分区
  category: true,
  // 显示 标题
  title: true,
  // 显示 置顶
  topping: true,
  // 显示 免费
  free: true,
  // 显示 大小
  size: true,

  // 显示 副标题
  sub_title: false,
  // 显示 标签
  tags: false,
  // 显示 下载&收藏
  download_collect: false,
  // 显示 上传时间
  upload_time: false,
  // 显示 评论/上传/下载
  statistics: false
});

/** 是否显示鼠标悬浮预览大图 */
export const _show_nexus_pic = persistStore('_show_nexus_pic', 1);

/** 是否屏蔽 gay 卡片 */
export const _block_gay = persistStore('_block_gay', 1);