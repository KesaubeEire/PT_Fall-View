# 代码质量与审查约束

## 适用范围
本技能适用于所有代码修改的审查和质量检查：
- 新功能实现
- Bug 修复
- 重构与优化
- 依赖更新
- 配置更改

## 代码审查规则

### 1. 代码清理要求
- 生产代码中移除调试输出：
  - 无控制台残留的 `console.log`（开发时允许，提交前移除）
  - 保留必要的 `console.warn` 和 `console.error`（用户可见问题）
  - 使用 `// TODO:` 注释标记未完成工作
- 函数参数必须有默认值处理或明确检查
- 删除未使用的导入、变量和函数

### 2. 工具函数使用规范
- JSON 解析必须使用安全的 `__JsonParse` 包装（来自 `src/lib/tools.js`）
- 颜色计算使用 `getTextColor` 工具函数
- DOM 查询使用 `Tool_Watch_Dom` 或带错误处理的 `querySelector`
- 异步操作必须有错误捕获（try-catch 或 .catch()）

### 3. 错误处理一致性
- 所有可能失败的操作都需要错误处理：
  - 网络请求（fetch、XHR）
  - DOM 操作（querySelector、appendChild）
  - 存储操作（localStorage、IndexedDB）
  - JSON 解析
- 错误信息应友好且对用户有帮助
- 使用 `notyf_lt` 显示用户可见的错误提示

### 4. 代码风格与一致性
- 遵循现有项目的代码风格：
  - 缩进：2个空格
  - 字符串：单引号优先
  - 分号：使用分号
  - 函数声明：函数表达式优先
- 导入顺序：外部库 → 内部模块 → 相对路径 → 类型导入
- 文件命名：kebab-case（.svelte 文件除外）

### 5. 提交前验证
- 运行现有构建脚本检查无错误：`npm run build:normal`
- 验证用户脚本功能基本正常
- 确保没有引入新的控制台错误

## 代码审查清单
每次提交前必须检查：

### 通用检查项
- [ ] 是否移除了调试用的 `console.log`？
- [ ] 函数参数是否有默认值或空值检查？
- [ ] 是否使用了项目工具函数（`__JsonParse`、`getTextColor`）？
- [ ] 异步操作是否有错误捕获？
- [ ] 是否删除了未使用的代码？

### 安全与健壮性
- [ ] 用户输入是否经过转义或验证？
- [ ] 是否处理了可能的异常情况？
- [ ] 跨域访问是否有降级方案？
- [ ] 内存敏感操作是否有限制或清理？

### 性能与兼容性
- [ ] 是否避免了重复的 DOM 查询？
- [ ] 事件监听器是否会被正确清理？
- [ ] 语法是否兼容目标浏览器？
- [ ] 包体积是否在合理范围？

### 用户体验
- [ ] 错误信息是否对用户友好？
- [ ] 操作是否有加载状态或反馈？
- [ ] 界面变化是否平滑（过渡动画）？
- [ ] 快捷键是否正常工作？

## 重点文件审查指南

### src/lib/tools.js
- 确保 `__JsonParse` 能处理嵌套的 JSON 字符串
- `Tool_Watch_Dom` 应返回清理函数
- `getTextColor` 支持各种颜色格式

### src/stores/index.js
- 新增 store 使用 `persistStore` 包装
- store 命名以 `_` 开头保持一致性
- 默认值合理且类型明确

### Svelte 组件
- 组件有适当的错误边界
- 样式使用 CSS 变量而非硬编码
- 事件处理使用 Svelte 语法（`on:click`）
- 响应式状态使用 `$state`、`$derived`

### src/lib/hijack.js
- XHR 劫持不会影响原网站功能
- 自定义事件名称符合模式 `req>METHOD->PATH`
- 响应解析处理各种 `responseType`

## 示例

✅ 通过审查的代码：
```javascript
// 使用项目工具函数
import { __JsonParse, getTextColor } from '@/lib/tools';

// 安全的 JSON 解析
const data = __JsonParse(rawData);
const textColor = getTextColor(backgroundColor);

// 完整的错误处理
async function loadTorrents() {
  try {
    const response = await fetch('/api/torrents');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const data = await response.json();
    return processData(data);
  } catch (error) {
    console.error('加载种子失败:', error);
    notyf_lt.error('无法加载种子列表，请检查网络连接');
    return [];
  }
}

// 合理的默认值
function formatSize(bytes = 0) {
  if (bytes === 0) return '0 B';
  // 格式化逻辑
}
```

❌ 未通过审查的代码：
```javascript
// 残留 console.log
console.log('调试数据:', data); // 提交前应移除

// 不安全的 JSON 解析
const data = JSON.parse(rawData); // 应使用 __JsonParse

// 缺少错误处理
const response = await fetch(url);
const data = await response.json(); // 可能失败

// 未处理的空值
function getTitle(torrent) {
  return torrent.title; // torrent 可能为 null/undefined
}

// 硬编码样式
element.style.color = '#333'; // 应使用 CSS 变量
```

## 构建与测试流程

### 提交前执行
```bash
# 1. 检查构建
npm run build:normal

# 2. 运行现有测试（如有）
# npm test

# 3. 检查控制台错误
# 在浏览器中手动测试核心功能
```

### 代码质量指标
- 无未处理的 promise 拒绝
- 无未捕获的异常
- 无内存泄漏警告
- 控制台无错误（允许警告）

## 激活说明
此技能在以下情况下自动激活：
- 任何代码提交前的审查
- 新功能实现完成时
- Bug 修复验证时
- 重构代码质量评估

此技能应与其它技能结合使用，确保代码符合所有质量、安全、兼容性要求。