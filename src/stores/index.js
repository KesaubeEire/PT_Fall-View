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
/** 是否为瀑布流视图 */
export const _isFallView = persistStore('_isFallView', true);

/** 拖拽边栏位置 */
export const _panelPos = persistStore('_panelPos', { x: 0, y: 0 });

/** 卡片布局参数 */
export const _card_layout = persistStore('_card_layout', {
  // 最小宽度
  min: 240,
  // 最大宽度
  max: 400,
  // 间距
  gap: 12
});

/** 卡片显示参数 */
export const _card_detail = persistStore('_card_detail', {
  // 全局总开关
  all: false,

  // 显示标题
  title: true,
  // 显示置顶和免费
  free: false,
  // 显示副标题
  sub_title: false,
  // 显示标签
  tags: false,
  // 显示大小&下载&收藏
  size_download_collect: false,
  // 显示上传时间
  upload_time: false,
  // 显示评论/上传/下载/完成
  statistics: false
});
