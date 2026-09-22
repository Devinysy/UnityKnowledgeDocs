---
title: 开始使用
description: Unity 工程台的本地运行、内容组织与发布流程。
---

# 开始使用

<div class="doc-meta">
  <span data-status="verified">状态：已验证</span>
  <span>运行环境：Node.js 20+</span>
  <span>发布：GitHub Pages</span>
  <span>验证日期：2026-09-22</span>
</div>

Unity 工程台是一套以 Git 为内容源的 VitePress 知识库。所有文档都保存在仓库中，换电脑后只需重新克隆仓库即可继续维护。

## 本地启动

首次使用：

```powershell
npm install
npm run docs:dev
```

浏览器打开 `http://localhost:5173`。

以后换电脑时：

```powershell
git clone <你的仓库地址>
cd <仓库目录>
npm install
npm run docs:dev
```

## 内容放在哪里

```text
docs/
├─ basics/          # 基础知识和概念速查
├─ snippets/        # 可复制代码及其适用条件
├─ issues/          # 从问题现象出发的解决案例
├─ repositories/    # Git 仓库索引
├─ tools/           # 常用工具和操作速查
└─ public/          # Logo、图片等静态资源
```

新增 Markdown 文件后，需要同时把入口添加到 `docs/.vitepress/config.mts` 的侧栏配置中。

## 推荐的页面元数据

每篇文档开头保留一段 Frontmatter：

```yaml
---
title: Android 构建时依赖冲突
description: 定位 Gradle 重复依赖的排查路径。
---
```

正文中再明确标注：

- 适用 Unity 版本
- 目标平台
- 验证状态
- 最后验证日期
- 外部资料来源

## 发布流程

正常更新只需要：

```powershell
git add .
git commit -m "docs: add Android build troubleshooting"
git push
```

推送到 `main` 分支后，GitHub Actions 会自动安装依赖、执行构建并发布到 GitHub Pages。

::: tip 首次发布
先在 GitHub 仓库的 **Settings → Pages** 中，将发布来源设置为 **GitHub Actions**。
:::

## 发布前检查

```powershell
npm run docs:build
npm run docs:preview
```

构建会检查 Markdown、内部链接和 VitePress 配置。只有本地构建成功后再推送。

