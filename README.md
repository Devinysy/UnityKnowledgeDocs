# Unity 工程台

面向 Unity 开发工作的可搜索知识库，集中整理基础文档、可复制代码片段、问题案例、Git 仓库和常用工具。

## 本地运行

需要 Node.js 20 或更高版本。

```powershell
npm install
npm run docs:dev
```

开发服务器默认运行在 `http://localhost:5173`。

## 构建与预览

```powershell
npm run docs:build
npm run docs:preview
```

生产文件生成在 `docs/.vitepress/dist`。

项目固定使用 VitePress 1.6.4，并通过 `overrides` 使用 Vite 6.4.3，以保留稳定版 VitePress API，同时避开旧版 Vite 开发服务器的已知安全问题。升级依赖后应重新执行构建和 `npm audit`。

## 发布到 GitHub Pages

仓库已包含 `.github/workflows/deploy.yml`。首次发布时：

1. 在 GitHub 创建一个空仓库。
2. 将当前仓库推送到 GitHub 的 `main` 分支。
3. 打开仓库的 **Settings → Pages**。
4. 在 **Build and deployment → Source** 中选择 **GitHub Actions**。
5. 等待 `Deploy VitePress site to Pages` 工作流完成。

站点配置会根据 `GITHUB_REPOSITORY` 自动推导 GitHub Pages 子路径。例如仓库名为 `unity-workbench`，构建路径会自动设置为 `/unity-workbench/`。如果以后绑定自定义域名，请在 GitHub 仓库的 Actions variables 中设置 `SITE_BASE` 为 `/`。

## 内容维护

- 内容统一保存在 `docs/` 下的 Markdown 文件中。
- 示例代码保存在对应目录的 `code/` 中，再由文档引用，避免代码和说明分离。
- 新页面应填写适用 Unity 版本、平台、状态和最后验证日期。
- 工具只链接官方发布页，不直接转载未知来源的二进制文件。

详细写作规范见站内的“开始使用”和“贡献指南”。
