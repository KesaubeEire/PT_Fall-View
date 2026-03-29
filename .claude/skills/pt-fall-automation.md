# 自动化任务约束

## 适用范围
本技能适用于项目维护和优化的自动化任务：
- 构建配置优化
- 依赖管理与更新
- 测试框架设置
- 代码质量检查自动化
- 部署与发布流程

## 自动化任务规则

### 1. 构建优化任务
当用户要求"优化构建"时，按顺序执行：

#### 1.1 配置检查
- 检查 `vite.config.js` 是否存在并验证配置
- 确认 `vite-plugin-monkey` 配置正确
- 验证输出格式适合用户脚本（IIFE）

#### 1.2 包体积分析
- 使用 `vite-bundle-analyzer`（如需则安装）
- 识别大型依赖并提出优化建议
- 检查是否有未使用的代码（tree-shaking）

#### 1.3 优化建议
- 代码分割：按需加载非关键功能
- 图片优化：压缩、懒加载、WebP 格式
- 第三方库：评估是否可以替换为更轻量的方案
- 构建配置：启用 gzip、brotil 压缩

### 2. 测试框架任务
当用户要求"添加测试"时：

#### 2.1 测试策略
- 单元测试：使用 Vitest（与 Vite 集成好）
- E2E 测试：使用 Playwright（跨浏览器支持）
- 测试重点：
  - XHR 拦截功能（hijack.js）
  - DOM 操作工具（tools.js）
  - Svelte 组件渲染
  - 用户脚本注入流程

#### 2.2 测试配置
```javascript
// vitest.config.js 示例
import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte({ hot: !process.env.VITEST })],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
```

#### 2.3 测试示例
```javascript
// hijack.test.js - XHR 拦截测试
import { Launch_Hijack } from '@/lib/hijack';

describe('XHR Hijack', () => {
  beforeEach(() => {
    // 设置测试环境
  });

  it('应该拦截 POST /search 请求', async () => {
    // 测试逻辑
  });

  it('应该触发自定义事件', () => {
    // 事件监听测试
  });
});
```

### 3. 依赖管理任务
#### 3.1 更新检查
- 检查 `package.json` 中依赖的过期情况
- 使用 `npm outdated` 或同等工具
- 区分必需更新和安全更新

#### 3.2 更新策略
- Svelte 相关：跟随主版本更新策略
- 构建工具：评估破坏性变更风险
- 用户脚本插件：保持兼容性

#### 3.3 回滚计划
- 更新前创建备份（git commit）
- 验证更新后构建正常
- 测试核心功能不受影响

### 4. 代码质量自动化
#### 4.1 静态分析
- 设置 ESLint 与项目规则
- 配置 Prettier 代码格式化
- 添加 commit 钩子（husky）

#### 4.2 持续集成
- GitHub Actions 配置示例：
```yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - run: npm test # 如果配置了测试
```

### 5. 发布与版本管理
#### 5.1 版本号策略
- 遵循语义化版本（SemVer）
- 主版本：不兼容的 API 更改
- 次版本：向后兼容的功能新增
- 修订号：向后兼容的问题修复

#### 5.2 发布检查清单
- [ ] 更新 `package.json` 版本号
- [ ] 更新用户脚本元数据中的版本
- [ ] 生成变更日志（CHANGELOG.md）
- [ ] 构建生产版本（`npm run build:minify`）
- [ ] 测试构建产物功能正常

## 任务执行流程

### 当用户请求优化时：
1. **分析现状**
   - 检查当前构建配置
   - 分析包体积和性能瓶颈
   - 识别优化机会

2. **提供方案**
   - 列出具体的优化建议
   - 预估工作量与风险
   - 建议实施优先级

3. **实施与验证**
   - 逐步实施优化
   - 验证每次更改的效果
   - 确保不破坏现有功能

### 当用户请求测试时：
1. **评估需求**
   - 确定测试范围（单元、集成、E2E）
   - 选择适合的测试框架
   - 估算配置工作量

2. **配置环境**
   - 安装测试依赖
   - 配置测试运行环境
   - 编写示例测试

3. **建立流程**
   - 设置自动化测试脚本
   - 配置 CI/CD 集成
   - 建立测试覆盖率目标

## 自动化工具建议

### 开发工具
- **Vite**：已配置，保持最新
- **TypeScript**：可考虑添加以获得更好类型安全
- **ESLint**：代码规范检查
- **Prettier**：代码格式化

### 质量工具
- **BundlePhobia**：检查包体积影响
- **Lighthouse CI**：性能审计
- **Codecov**：测试覆盖率报告

### 发布工具
- **standard-version**：自动化版本管理和变更日志
- **release-it**：交互式发布流程
- **GitHub Releases**：版本分发

## 激活说明
此技能在以下情况下自动激活：
- 用户明确请求"优化构建"、"添加测试"、"更新依赖"
- 项目维护相关的自动化任务
- 代码质量或性能改进讨论
- 发布流程或 CI/CD 设置

## 注意事项
1. **渐进式改进**：优先解决最关键的问题
2. **向后兼容**：确保更改不影响现有用户
3. **文档更新**：自动化更改需更新相应文档
4. **用户反馈**：重大变更前获取用户确认