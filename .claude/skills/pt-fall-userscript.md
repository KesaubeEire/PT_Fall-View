# 用户脚本兼容性约束

## 适用范围
本技能适用于所有影响用户脚本运行的代码修改：
- JavaScript 语法和 API 使用
- 构建配置（vite.config.js）
- 浏览器 API 兼容性
- 脚本注入与执行时机
- 依赖库选择

## 兼容性规则

### 1. JavaScript 语法兼容性
- 保持 ES2020+ 语法，兼容主流浏览器：
  - Chrome 80+（2020年发布）
  - Firefox 75+（2020年发布）
  - Safari 14+（2020年发布）
- 避免使用实验性 API 或需要 polyfill 的新特性
- 使用 `?.`、`??`、`||=` 等现代语法（已广泛支持）
- 避免使用顶级 `await`（可能影响脚本加载）

### 2. 浏览器 API 使用
- 优先使用稳定且广泛支持的 API
- 对可能不存在的 API 进行特性检测：
```javascript
if (typeof MutationObserver !== 'undefined') {
  // 安全使用
}
```
- 避免使用废弃的 API（如 `document.createEvent`）

### 3. 用户脚本管理器兼容性
- 测试在主流用户脚本管理器中的兼容性：
  - Tampermonkey（Chrome、Firefox、Safari）
  - Violentmonkey（Chrome、Firefox、Edge）
  - Greasemonkey（Firefox）
- 遵循用户脚本元数据标准（`@grant`、`@match`、`@run-at`）

### 4. 构建与打包约束
- 压缩构建时保留必要注释（如版本号、功能说明）
- 保持较小的包体积（< 500KB 未压缩）
- 避免引入大型第三方库，优先使用浏览器原生 API
- 使用 `vite-plugin-monkey` 的适当配置：
```javascript
// vite.config.js 示例
export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.js',
      userscript: {
        // 必要的元数据
      },
      format: {
        generate: 'iife' // 立即执行函数
      }
    })
  ]
});
```

### 5. 注入与执行时机
- 脚本应在 `DOMContentLoaded` 或 `@run-at document-end` 时执行
- 确保目标 DOM 元素已存在后再进行操作
- 使用 `src/lib/tools.js` 中的 `Tool_Watch_Dom` 等待元素
- 避免阻塞主线程的同步操作

### 6. 依赖管理
- 最小化依赖，优先使用轻量级库
- 现有依赖：
  - `svelte`：前端框架（必需）
  - `svelte-bricks`：瀑布流布局（必需）
  - `notyf`：通知系统（可选，可替换）
  - `vite-plugin-monkey`：构建工具（必需）
- 添加新依赖前评估必要性

## 代码审查清单
在提交代码前，检查：
- [ ] 语法是否兼容目标浏览器版本？
- [ ] 是否进行了必要的特性检测？
- [ ] 构建输出是否适合用户脚本管理器？
- [ ] 脚本注入时机是否正确？
- [ ] 包体积是否在合理范围内？

## 浏览器支持矩阵

### 必须支持的 API
- ES2020：可选链、空值合并、动态导入
- Web APIs：MutationObserver、CustomEvent、fetch、URL
- CSS：CSS Variables、Flexbox、Grid（谨慎使用）

### 需要特性检测的 API
```javascript
// 推荐的做法
const supportsIntersectionObserver = 'IntersectionObserver' in window;
const supportsResizeObserver = 'ResizeObserver' in window;
const supportsCssVariables = window.CSS && CSS.supports('color', 'var(--test)');

if (supportsIntersectionObserver) {
  // 使用新 API
} else {
  // 降级方案
}
```

### 用户脚本元数据
确保 `vite-plugin-monkey` 生成正确的元数据：
```javascript
// 在构建配置中应包含
userscript: {
  name: 'PT_Fall-View',
  version: '0.3.12',
  description: 'M-Team 瀑布流视图增强',
  author: 'Your Name',
  match: ['*://*.m-team.cc/*'],
  grant: ['GM_xmlhttpRequest', 'GM_addStyle', 'GM_getValue', 'GM_setValue'],
  'run-at': 'document-end'
}
```

## 示例

✅ 兼容性好的代码：
```javascript
// 特性检测
if (window.ResizeObserver) {
  const observer = new ResizeObserver(entries => {
    // 处理大小变化
  });
  observer.observe(element);
} else {
  // 降级方案：使用窗口 resize 事件
  window.addEventListener('resize', handleResize);
}

// 安全的现代语法（ES2020+）
const torrentId = data?.torrent?.id ?? 'unknown';
const size = formatSize(data.size || 0);

// 等待 DOM 就绪
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScript);
} else {
  initScript();
}
```

❌ 兼容性差的代码：
```javascript
// 使用实验性 API（可能不存在）
const audioContext = new AudioContext();
const gesture = new Gesture(event);

// 使用需要 polyfill 的语法
const array = [1, 2, 3];
const last = array.at(-1); // ES2022，部分浏览器不支持

// 阻塞主线程
const data = JSON.parse(syncHttpRequest(url)); // 假设的同步请求

// 过早执行
document.head.appendChild(script); // DOM 可能还未完全加载
```

## 构建配置检查点

### package.json scripts
```json
{
  "scripts": {
    "dev": "vite --mode development",
    "build": "sh ./build.sh",
    "build:normal": "vite build --minify false",
    "build:minify": "vite build"
  }
}
```

### 构建输出验证
构建后检查：
- 生成的 `.user.js` 文件是否包含正确元数据？
- 代码是否被正确压缩但可读？
- 是否有未处理的错误或警告？

## 激活说明
此技能在以下情况下自动激活：
- 修改构建配置（vite.config.js、package.json）
- 添加新的 JavaScript 语法或 API
- 更改依赖或引入新库
- 修改脚本注入或初始化的逻辑
- 任何可能影响浏览器兼容性的更改