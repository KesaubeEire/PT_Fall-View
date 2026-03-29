# PT_Fall-View - M-team 专用瀑布流视图脚本

专为 M-team PT 网站打造的全新瀑布流视图工具，提供更优雅、更高效的种子浏览体验。

[**==> GreasyFork 安装 <==**](https://greasyfork.org/zh-CN/scripts/543925-pt瀑布流视图)  
[**> GitHub <**](https://github.com/KesaubeEire/PT_Fall-View)

## ✨ 核心功能

### 🖼️ 悬浮预览查看大图
无需点击即可查看高清海报，大图展示区域尽可能最大化，提供沉浸式浏览体验。

![pic_hover](https://raw.githubusercontent.com/KesaubeEire/PT_Masonry_View_Svelte/newMT/readme/pic_hover.png)

### 🪟 内置种子详情窗口
告别频繁的页面跳转！在 iframe 小窗口中直接查看种子详情，支持调整窗口宽度和拖拽交互。

![pic_detail](https://raw.githubusercontent.com/KesaubeEire/PT_Masonry_View_Svelte/newMT/readme/pic_detail.png)

### ⚙️ 丰富的配置选项
高度可定制的用户体验，满足不同用户的需求偏好。

![pic_config](https://raw.githubusercontent.com/KesaubeEire/PT_Masonry_View_Svelte/newMT/readme/pic_config.png)

**主要配置项：**
- **MT 专属功能**：屏蔽 Gay 片内容过滤
- **卡片信息配置**：自由选择显示的信息字段
- **加载方式选择**：滚动加载或点击加载按钮
- **瀑布流参数**：自定义列数、间距和视觉效果
- **交互设置**：悬浮预览、图片加载失败处理等细节选项
- **界面定制**：拖拽式控制面板、快捷键支持

## 🚀 技术架构

### ✨ 现代化技术栈
- **前端框架**: [Svelte 5](https://svelte.dev/) (v5.16.0) - 响应式UI框架
- **构建工具**: [Vite](https://vitejs.dev/) - 极速开发体验
- **瀑布流布局**: [svelte-bricks](https://bricks.janosh.dev/) - 高效的瀑布流布局库
- **通知系统**: [Notyf](https://github.com/caroso1222/notyf) - 美观的toast通知
- **脚本打包**: [vite-plugin-monkey](https://github.com/lisonge/vite-plugin-monkey) - 油猴脚本开发工具链

### 📂 项目结构
```
src/
├── component/         # 通用组件 (悬浮面板、开关、文档等)
├── views/             # 页面视图 (入口、瀑布流、卡片等)
├── stores/            # 状态管理 (Svelte stores)
├── lib/               # 工具库函数
├── siteConfig/        # 站点相关配置
├── services/          # 服务层
├── types/             # 类型定义
└── assets/            # SVG图标和其他静态资源
```


## 📈 功能状态

### ✅ 已完成功能
- ✓ 全新的 Svelte 5 架构重写
- ✓ 支持 M-team 新旧版本网站（next/ob.m-team.cc）
- ✓ 悬浮大图预览和交互优化
- ✓ iframe 种子详情窗口 + 宽度调整
- ✓ 复制翻页按钮到瀑布流底部
- ✓ 图片加载失败时显示标题和副标题
- ✓ 丰富的配置选项和用户偏好保存
- ✓ 屏蔽非种子列表的 /search 页面
- ✓ 解决 next 站点 flowPanel 颜色问题

### 🔄 计划中的改进
- 卡片悬浮信息的可配置性增强
- 快捷键系统的完善和自定义
- 更好的错误处理和用户反馈
- 性能优化和加载速度提升

## 🐛 问题反馈与支持

### Telegram 群组
[PT_Masonry 社区](https://t.me/+wLPO7JyNz_o1YWRl) - 获取最新版本推送和问题反馈

### 更新日志
**最新版本: v0.3.12**
- 持续的性能优化和稳定性改进
- 用户体验细节优化
- Bug 修复和兼容性增强

**v0.3.11 主要更新：**
- ✨ 添加 iframe 宽度调整功能
- ✨ 增加图片加载失败时显示标题和副标题的配置选项
- ✨ 添加悬浮大图状态切换功能，优化配置菜单预览显示设置
- ✨ 复制翻页按钮到瀑布流底部，防止遮挡时无法翻页

## 📄 许可证

本项目采用 [MIT License](LICENSE) 开源协议。

---

✨ **全新架构的 M-team 瀑布流脚本**  
✨ **兼容旧风格网站(ob.m-team 那个)**  
✨ **无需担心 auth 问题，安装即可使用**  

> **个人历史脚本兼容性说明**：  
> - 本脚本专为 M-team 站点设计
> - 老版本的 PT_Masonry_View_Svelte (v1.1.x) 现在仅推荐用于 KamePT 站点
> - 如果同时使用 M-team 和 KamePT，请在 PT_Masonry_View_Svelte 中手动屏蔽 mteam 相关站点
