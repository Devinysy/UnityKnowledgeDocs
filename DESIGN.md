---
version: alpha
name: "Unity 工程台"
description: "像 Unity 编辑器工作台一样清晰、可靠的中文工程知识索引。"
colors:
  primary: "#1F6B73"
  primary-hover: "#18575E"
  accent: "#C9791D"
  background: "#F4F7F6"
  surface: "#FFFFFF"
  surface-soft: "#EAF0EF"
  text: "#182429"
  text-muted: "#5B6A70"
  border: "#CAD7D7"
  focus: "#0F7783"
  success: "#2F7D5A"
  warning: "#A85E0B"
  danger: "#B8423D"
  code-background: "#172126"
  dark-background: "#101719"
  dark-surface: "#172124"
  dark-text: "#E8F0EF"
  dark-border: "#344649"
typography:
  display:
    fontFamily: "Bahnschrift, Segoe UI Variable Display, PingFang SC, Microsoft YaHei, sans-serif"
    lineHeight: "1.08"
  sans:
    fontFamily: "Segoe UI Variable Text, PingFang SC, Microsoft YaHei, system-ui, sans-serif"
    lineHeight: "1.7"
  mono:
    fontFamily: "Cascadia Code, JetBrains Mono, SFMono-Regular, Consolas, monospace"
    lineHeight: "1.55"
rounded:
  sm: "0.375rem"
  DEFAULT: "0.625rem"
  md: "0.75rem"
  lg: "1rem"
spacing:
  xs: "0.375rem"
  sm: "0.625rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section-gap: "4.5rem"
  page-max: "72rem"
components:
  search-launch: {}
  index-console: {}
  route-card: {}
  status-tag: {}
---

# Unity 工程台 Design System

## Overview

### Creative North Star

界面以 Unity 编辑器中的 Inspector、Console 和三轴 gizmo 为物理参照：内容被清楚地分区、状态可快速识别、技术细节使用等宽字体。它不是对 Unity 编辑器的像素级模仿，而是一张经过整理的工程工作台。

### Product context and register

- **Audience and primary job:** Unity 开发者需要在开发、构建或排障过程中迅速找到经过验证的说明、代码、仓库或工具。
- **Target market and evidence:** 当前面向中文使用者；需求和内容分类来自本项目任务说明。
- **Locale and language policy:** 界面和主内容使用简体中文，代码、API、命令和仓库原名保留英文。
- **Usage scene:** 桌面开发环境为主，手机端用于临时查询；查询通常紧急，因此搜索与目录优先于品牌叙事。
- **Register:** 混合型。首页允许适量表达，文档正文坚持熟悉、克制的技术文档结构。
- **Memorable signature:** 首页的“工作索引台”与三轴定位标记，把五类知识映射为可扫描的工程索引。
- **Restraint:** 正文、代码块、导航和搜索保持 VitePress 的成熟交互，不用装饰覆盖信息层级。
- **Anti-references:** 不做营销型渐变大屏、博客杂志版式或游戏化 HUD；这些风格会降低排障时的阅读效率。
- **Token ownership/runtime mapping:** `docs/.vitepress/theme/custom.css` 是运行时令牌的唯一实现源；本文件镜像已接受的语义值并解释意图。颜色、圆角、间距和字体通过同名 CSS 变量映射到 VitePress 主题和首页组件，变更时两处同时更新并通过 lint 与浏览器检查防止漂移。

## Colors

浅色主题使用冷灰绿色画布 `background`，白色 `surface` 承载信息，`primary` 表示导航、链接和主要操作。`accent` 仅用于需要注意的验证状态和三轴签名，不承担普通装饰。错误、警告和成功始终使用各自语义色并配合文本。深色主题把相同语义映射到 `dark-background`、`dark-surface`、`dark-text` 和 `dark-border`，不改变层级。

## Typography

标题使用偏窄的 `display` 字体栈，形成编辑器面板标题般的紧凑感；中文正文使用覆盖 Windows、macOS 的 `sans` 字体栈。版本号、标签、命令和辅助信息使用 `mono`。正文不使用斜体表达状态，单行长度控制在适合中文技术阅读的范围。

## Layout

内容最大宽度为 `72rem`。首页使用主说明与工作索引双栏，窄屏转为单栏；文档页面保留 VitePress 的侧栏与大纲。间距以内容关系而非纯装饰组织，主页大区段使用 `section-gap`，卡片内部使用 `md` 或 `lg`。任何移动端转换都必须保留链接、状态和完整标题。

## Elevation & Depth

默认依靠背景层、描边和局部色带表达层级。静态文档卡片不使用浓重阴影；可交互卡片仅在悬停时出现轻微位移和短阴影。代码与索引控制台使用深色面板形成明确的工具层，不在正文中重复这种强对比。

## Shapes

控件使用 `DEFAULT` 圆角，容器最高使用 `lg`。状态标签可以使用胶囊形，但普通按钮和卡片不做全圆角。三轴标记、细分隔线和面板角标采用直线，以呼应编辑器工具语言。

## Components

### Foundational visual states

链接、按钮和卡片均提供默认、悬停、按下和可见键盘焦点。焦点使用 `focus` 描边并保留足够偏移。禁用、忙碌和错误状态只有在真实功能需要时出现，不能制造无动作按钮。

### Buttons and actions

主要搜索按钮使用 `primary` 实底；次要浏览操作使用描边。动作标签使用明确动词，如“打开全文搜索”“浏览问题案例”。所有按钮保持稳定尺寸，图标只作辅助。

### Navigation and data display

顶部导航负责全局类别，左侧栏负责文档层级。首页 `route-card` 是真实链接；`status-tag` 同时包含文字，不依赖颜色。技术数据和版本信息使用等宽字体以便扫描。

### Forms and overlays

第一版不自建表单或浮层，全文搜索复用 VitePress 的本地搜索组件。搜索必须支持键盘操作、清除、无结果状态和窄屏显示。

### Iconography

使用简单的线性 SVG，统一为圆角线帽与 `1.75–2px` 描边。图标不单独承担含义，重要操作始终带文字标签。

### Motion

动效只表达交互：卡片悬停 160ms、按钮按下 120ms。遵循 `prefers-reduced-motion`，关闭位移和非必要过渡。

### Content and data visualization

文案直接描述用户能找到或执行的内容，不使用宣传口号替代说明。版本、平台、验证状态与日期必须可见；仓库和工具页面明确来源及风险。

## Do's and Don'ts

- **Do:** 让搜索、版本和验证状态在第一眼可见。
- **Do:** 用同一套语义令牌维护浅色、深色和移动端体验。
- **Don't:** 使用无意义的渐变、发光或大量悬浮卡片营造“科技感”。
- **Don't:** 用颜色单独表达状态，或为了视觉效果牺牲正文宽度与代码可读性。
