# 内存与资源管理约束

## 适用范围
本技能适用于所有涉及以下操作的代码修改：
- DOM 监听器（MutationObserver、ResizeObserver、IntersectionObserver）
- 事件监听器（addEventListener）
- 定时器（setInterval、setTimeout）
- 异步操作（Promises、fetch）
- Svelte 组件生命周期管理

## 内存管理规则

### 1. Observer 清理
- 添加 `MutationObserver`、`ResizeObserver`、`IntersectionObserver` 时，必须：
  - 提供对应的清理函数（`observer.disconnect()`）
  - 在 Svelte 组件的 `onDestroy` 生命周期中注册清理
  - 使用 `src/lib/tools.js` 中的 `Tool_Watch_Dom` 工具时，确保使用其返回的清理函数

### 2. 事件监听器清理
- 所有 `addEventListener` 调用必须有对应的 `removeEventListener`
- 使用 Svelte 的事件处理语法（`on:eventname`）时，Svelte 会自动清理
- 手动添加的事件监听器必须在组件销毁时移除
- 避免在循环中重复添加相同的事件监听器

### 3. 定时器清理
- 所有 `setInterval` 和 `setTimeout` 必须有对应的 `clearInterval` 和 `clearTimeout`
- 定时器 ID 必须存储在组件作用域内以便清理
- 避免在组件内部创建可能无限运行的定时器

### 4. Svelte 组件资源管理
- 在 Svelte 5 组件中，使用 `onDestroy` 清理资源：
```javascript
import { onDestroy } from 'svelte';

onDestroy(() => {
  // 清理所有资源
  observer.disconnect();
  window.removeEventListener('resize', handler);
  clearInterval(timerId);
});
```
- 对于异步操作，使用 `AbortController` 取消未完成的请求
- 避免在组件外部持有对 DOM 元素的长期引用

### 5. 闭包与引用管理
- 避免在闭包中捕获大型对象或 DOM 元素
- 使用弱引用（WeakMap、WeakSet）当需要缓存但不阻止垃圾回收时
- 及时将不再需要的引用设置为 `null`

## 代码审查清单
在提交任何代码前，检查：
- [ ] 是否每个 `addEventListener` 都有对应的 `removeEventListener`？
- [ ] 是否每个 `Observer` 都调用了 `disconnect()`？
- [ ] 是否每个定时器都设置了清理？
- [ ] 是否在 `onDestroy` 中清理了所有资源？
- [ ] 是否避免了循环引用？

## 重点关注文件

### src/lib/tools.js - `Tool_Watch_Dom`
```javascript
// ✅ 正确用法：使用返回的清理函数
const cleanup = Tool_Watch_Dom('.selector', (el) => {
  // 操作元素
});

// 在组件销毁时清理
onDestroy(() => {
  cleanup?.();
});
```

### src/views/Entry_Mteam.svelte
- 检查 `MutationObserver` 的使用和清理
- 验证事件监听器的添加和移除配对
- 确保异步操作在组件销毁时取消

### src/App.svelte - iframe 相关
- iframe 事件监听器的清理
- 拖拽事件（mousemove、mouseup）的及时移除

## 示例

✅ 正确做法：
```javascript
// Svelte 组件内
let observer;
let timerId;
let abortController;

onMount(() => {
  // 创建 AbortController 用于取消 fetch
  abortController = new AbortController();

  // 设置定时器
  timerId = setInterval(() => {
    // 定期任务
  }, 1000);

  // 创建观察者
  observer = new MutationObserver(() => {});
  observer.observe(document.body, { childList: true });

  // 添加事件监听器
  window.addEventListener('resize', handleResize);
});

onDestroy(() => {
  // 清理所有资源
  abortController.abort();
  clearInterval(timerId);
  observer?.disconnect();
  window.removeEventListener('resize', handleResize);
});
```

❌ 错误做法：
```javascript
// 没有清理的定时器
setInterval(() => {
  // 这会一直运行，即使组件已销毁
}, 1000);

// 没有清理的事件监听器
window.addEventListener('scroll', () => {
  // 组件销毁后仍然触发
});

// 没有清理的观察者
const observer = new MutationObserver(() => {});
observer.observe(document.body, { childList: true });
// 忘记调用 observer.disconnect()
```

## 激活说明
此技能在以下情况下自动激活：
- 修改任何包含事件监听器、定时器或观察者的代码
- 创建新的 Svelte 组件
- 修改 `src/lib/tools.js` 工具函数
- 涉及异步操作或资源管理的任何更改