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
