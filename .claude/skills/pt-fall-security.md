# 安全与跨域操作约束

## 适用范围
本技能适用于所有涉及以下操作的代码修改：
- XHR/Fetch 请求拦截
- iframe 操作与通信
- DOM 注入与脚本注入
- 跨域资源访问
- 用户输入处理

## 安全约束规则

### 1. XHR 拦截安全
- 当修改 `src/lib/hijack.js` 或任何 XHR 拦截代码时，必须检查：
  - 是否避免暴露敏感信息到全局对象（如 `window`）
  - 是否处理了跨域限制（CORS）的降级方案
  - 是否对拦截的请求体进行了适当的转义/验证
  - 是否防止重复劫持导致的无限循环

### 2. iframe 操作安全
- 操作 iframe 时必须验证来源域名，避免恶意网站利用
- iframe 加载外部 URL 时，需要检查 `src` 属性的合法性
- 通过 iframe 访问内部 DOM 时，必须有 try-catch 处理 `SecurityError`
- iframe 通信必须使用 `postMessage` 并验证 `origin`

### 3. DOM 注入安全
- 禁止添加未经验证的第三方脚本注入
- 动态创建的 `<script>` 标签必须验证 `src` 或内容来源
- 用户提供的内容（如搜索词）必须进行 HTML 转义
- 避免使用 `innerHTML`，优先使用 `textContent` 或 Svelte 模板

### 4. 跨域处理
- 使用 `try-catch` 包装所有可能因跨域失败的 API 调用
- 提供降级方案：当跨域访问失败时，应有替代方案或用户提示
- 避免在用户脚本中请求敏感数据（如 cookies、localStorage 中的密码）

### 5. 事件处理安全
- 自定义事件（`CustomEvent`）的 `detail` 数据不应包含原始用户输入
- 事件监听器必须能被正确移除，防止内存泄漏
- 避免使用 `eval()` 或 `new Function()` 处理动态代码

## 代码审查清单
在提交任何安全相关代码前，检查：
- [ ] 是否有未转义的用户输入直接输出到 DOM？
- [ ] 是否验证了外部 URL 的合法性？
- [ ] 是否处理了跨域访问失败的场景？
- [ ] 是否避免暴露内部数据到全局作用域？
- [ ] 是否清理了临时创建的安全敏感元素？

## 示例
✅ 安全做法：
```javascript
// 使用 try-catch 处理跨域访问
try {
  const iframeDoc = iframe.contentDocument;
  // 安全操作
} catch (e) {
  console.warn('跨域访问受限:', e);
  notyf_lt.error('无法访问iframe内容');
}

// 转义用户输入
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
```

❌ 不安全做法：
```javascript
// 直接使用 innerHTML
element.innerHTML = userInput;

// 未验证的脚本注入
const script = document.createElement('script');
script.src = userProvidedURL;
document.head.appendChild(script);
```

## 激活说明
此技能在以下情况下自动激活：
- 修改 `src/lib/hijack.js` 文件
- 修改 `src/App.svelte` 中的 iframe 相关代码
- 添加任何新的 DOM 注入或脚本加载逻辑
- 处理用户输入或外部数据