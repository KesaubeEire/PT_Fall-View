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
window.__JsonParse = __JsonParse; // 全局暴露

/** 根据背景颜色动态调整文字黑白
 * @param background 背景颜色(支持 #RGB, #RRGGBB, #RRGGBBAA, rgba() 等格式)
 */
export function getTextColor(background) {
  if (!background) return 'inherit';

  let color = background.toString().trim();

  // 处理 CSS 变量 var(--variable-name)
  if (color.startsWith('var(')) {
    const varMatch = color.match(/var\(([^)]+)\)/);
    if (varMatch) {
      const varName = varMatch[1];
      // 获取 CSS 变量的实际值
      const computedValue = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
      if (computedValue) {
        color = computedValue;
      } else {
        // 如果获取不到变量值，返回默认值
        return 'inherit';
      }
    }
  }

  // 处理 rgba/rgb 格式
  if (color.startsWith('rgba(') || color.startsWith('rgb(')) {
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
    if (match) {
      const [, red, green, blue] = match;
      const brightness = (parseInt(red) * 299 + parseInt(green) * 587 + parseInt(blue) * 114) / 1000;
      return brightness < 128 ? 'white' : 'black';
    }
  }

  // 移除 # 号
  color = color.replace('#', '');

  // 处理不同长度的十六进制颜色
  let red, green, blue;

  if (color.length === 3) {
    // #RGB 格式
    red = parseInt(color[0] + color[0], 16);
    green = parseInt(color[1] + color[1], 16);
    blue = parseInt(color[2] + color[2], 16);
  } else if (color.length === 6) {
    // #RRGGBB 格式
    red = parseInt(color.substr(0, 2), 16);
    green = parseInt(color.substr(2, 2), 16);
    blue = parseInt(color.substr(4, 2), 16);
  } else if (color.length === 8) {
    // #RRGGBBAA 格式 (忽略透明度通道)
    red = parseInt(color.substr(0, 2), 16);
    green = parseInt(color.substr(2, 2), 16);
    blue = parseInt(color.substr(4, 2), 16);
  } else {
    // 无效格式，返回默认值
    return 'inherit';
  }

  // 计算亮度
  const brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  // 如果亮度低于阈值128，则返回白色；否则返回黑色
  return brightness < 128 ? 'white' : 'black';
}
