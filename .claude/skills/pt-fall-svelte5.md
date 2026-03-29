# Svelte 5 最佳实践约束

## 适用范围
本技能适用于所有 Svelte 组件的创建和修改：
- `.svelte` 文件组件
- 状态管理（stores）
- 组件生命周期
- 响应式声明
- 样式与主题系统

## Svelte 5 规范规则

### 1. 组件错误边界
- 新组件必须包含错误边界处理
- 使用 Svelte 5 的 `{#catch}` 块或 `onError` 生命周期
- 关键组件（如卡片、瀑布流容器）必须有降级 UI

### 2. 状态管理规范
- 使用 stores 时遵循现有模式（`persistStore` 封装）
- 全局状态放在 `src/stores/index.js` 中
- 组件局部状态使用响应式变量（`$state`）
- 避免在多个组件中重复定义相同逻辑的 store

### 3. 响应式编程
- 优先使用 Svelte 响应式声明（`$derived`、`$effect`）
- 避免在组件顶层直接操作 DOM，优先使用响应式绑定
- 使用 `$inspect` 进行开发调试（生产环境移除）

### 4. 组件设计模式
- 组件 props 明确类型（通过 JSDoc 或 TypeScript 注释）
- 复杂组件拆分为子组件（单一职责）
- 使用具名 slot 提供灵活的内容插入
- 组件命名遵循 PascalCase，文件与组件名一致

### 5. 样式与主题
- 使用 CSS 变量（如 `--textColor1`）保持主题一致性
- 颜色值通过 `src/stores/index.js` 中的 `_textColor` store 管理
- 响应式设计使用容器查询或 CSS 媒体查询
- 避免使用深度选择器（`>>>`、`/deep/`）

### 6. 性能优化
- 大型列表使用 `{#each}` 的 `key` 指令
- 避免在渲染函数中执行昂贵计算（使用 `$derived` 缓存）
- 图片使用懒加载（`loading="lazy"`）
- 条件渲染使用 `{#if}` 而非 `display: none`

## 代码审查清单
在提交 Svelte 代码前，检查：
- [ ] 组件是否有错误边界处理？
- [ ] props 是否有 JSDoc 类型注释？
- [ ] 是否避免了不必要的重新渲染？
- [ ] 样式是否使用 CSS 变量而非硬编码颜色？
- [ ] 组件是否遵循单一职责原则？

## 现有组件模式参考

### 状态持久化
```javascript
// 使用现有的 persistStore 模式
import { persistStore } from '@/stores';

const _customSetting = persistStore('_customSetting', {
  enabled: true,
  value: 50
});
```

### 组件错误处理
```svelte
<script>
  import { onError } from 'svelte';

  let error = null;

  onError((e) => {
    console.error('组件错误:', e);
    error = e;
    // 可选的错误上报
  });
</script>

{#if error}
  <div class="error-fallback">
    <p>组件加载失败</p>
    <button on:click={() => location.reload()}>重试</button>
  </div>
{:else}
  <!-- 正常组件内容 -->
{/if}
```

### 响应式样式
```svelte
<style>
  .card {
    /* 使用 CSS 变量 */
    color: var(--textColor1);
    background: var(--card-bg, white);

    /* 响应式圆角 */
    border-radius: calc(var(--card-radius, 16) * 1px);
  }
</style>

<div class="card" style:--card-radius={$_card_radius.value}>
  <!-- 内容 -->
</div>
```

## 文件组织规范

### 组件目录结构
```
src/
├── views/           # 页面级组件
│   ├── Entry_Mteam.svelte
│   └── Mteam_Fall.svelte
├── component/       # 可复用UI组件
│   ├── switch.svelte
│   └── flowPanel.svelte
└── assets/          # 图标和静态资源
```

### 导入路径别名
- 使用 `@/` 作为 `src/` 的别名
- 相对导入使用 `./` 或 `../`
- 避免深度嵌套的相对路径（如 `../../../../`）

## 示例

✅ 推荐做法：
```svelte
<script>
  // 使用 JSDoc 类型提示
  /** @type {string} */
  export let title = '默认标题';

  /** @type {boolean} */
  export let active = false;

  // 响应式状态
  let count = $state(0);

  // 派生值
  let doubled = $derived(count * 2);

  // 副作用
  $effect(() => {
    console.log(`count 变化: ${count}`);
  });
</script>

<article class="card {active ? 'active' : ''}">
  <h2>{title}</h2>
  <p>计数: {count} (双倍: {doubled})</p>
  <button on:click={() => count++}>增加</button>
</article>

<style>
  .card {
    padding: 1rem;
    border: 1px solid var(--border-color, #e0e0e0);
    border-radius: var(--card-radius, 8px);
  }

  .card.active {
    border-color: var(--primary-color, #007acc);
  }
</style>
```

❌ 不推荐做法：
```svelte
<script>
  // 没有类型提示
  export let title;

  // 直接操作 DOM
  onMount(() => {
    document.querySelector('.card').style.color = 'red';
  });
</script>

<!-- 没有错误边界 -->
<div class="card">
  {potentiallyErrorThrowingFunction()}
</div>

<style>
  /* 硬编码颜色 */
  .card {
    color: #333;
    border: 1px solid #ccc;
  }
</style>
```

## 激活说明
此技能在以下情况下自动激活：
- 创建或修改任何 `.svelte` 文件
- 修改 `src/stores/index.js` 状态管理
- 添加新的组件或 UI 元素
- 涉及样式或主题系统的更改