/**
 * 检查某 dom 元素是否存在并拿到此元素
 * @param {*} selector
 * @param {*} func 直接操作这个元素, 可选

 */
export function Tool_Watch_Dom(selector, func = () => {}) {
  if (!selector) return;

  // 立即检查元素是否存在
  const targetElement = document.querySelector(selector);
  if (targetElement) {
    func(targetElement);
    return;
  }

  // 创建观察者监听 DOM 变化
  const observer = new MutationObserver((mutations, obs) => {
    const el = document.querySelector(selector);
    if (el) {
      obs.disconnect(); // 停止监听
      func(el);
    }
  });

  // 开始观察文档变化
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
}

/**
 * 递归还原被 JSON.parse 的字符串为对象
 * @param {any} data - 需要处理的数据
 * @returns {any} 还原后的数据
 */
export function __JsonParse(data) {
  // 如果是字符串，尝试解析
  if (typeof data === 'string') {
    try {
      const parsed = JSON.parse(data);
      // 递归处理解析后的结果
      return __JsonParse(parsed);
    } catch (e) {
      // 如果解析失败，返回原字符串
      return data;
    }
  }

  // 如果是数组，递归处理每个元素
  if (Array.isArray(data)) {
    return data.map(item => __JsonParse(item));
  }

  // 如果是对象，递归处理每个属性
  if (data !== null && typeof data === 'object') {
    const result = {};
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        result[key] = __JsonParse(data[key]);
      }
    }
    return result;
  }

  // 其他类型直接返回
  return data;
}
