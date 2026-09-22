import { defineConfig } from 'vitepress'

function normalizeBase(value: string) {
  const withLeadingSlash = value.startsWith('/') ? value : `/${value}`
  return withLeadingSlash.endsWith('/') ? withLeadingSlash : `${withLeadingSlash}/`
}

const repository = process.env.GITHUB_REPOSITORY
const repositoryName = repository?.split('/')[1] ?? ''
const inferredPagesBase =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName &&
  !repositoryName.endsWith('.github.io')
    ? `/${repositoryName}/`
    : '/'
const base = normalizeBase(process.env.SITE_BASE?.trim() || inferredPagesBase)
const repositoryUrl = repository ? `https://github.com/${repository}` : undefined

export default defineConfig({
  base,
  lang: 'zh-CN',
  title: 'Unity 工程台',
  description: '问题、写法、仓库与工具，一处可查。',
  lastUpdated: true,
  cleanUrls: true,
  markdown: {
    codeCopyButtonTitle: '复制代码',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
    ['meta', { name: 'theme-color', content: '#1F6B73' }],
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    [
      'meta',
      {
        name: 'keywords',
        content: 'Unity, C#, AssetBundle, Addressables, Android, Git, 开发工具',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Unity 工程台',
    nav: [
      { text: '基础文档', link: '/basics/' },
      { text: '代码片段', link: '/snippets/' },
      { text: '问题案例', link: '/issues/' },
      {
        text: '资源索引',
        items: [
          { text: 'Git 仓库', link: '/repositories/' },
          { text: '常用工具', link: '/tools/' },
        ],
      },
      { text: '开始使用', link: '/getting-started' },
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          { text: '平台说明', link: '/getting-started' },
          { text: '贡献指南', link: '/contributing' },
          { text: '更新记录', link: '/changelog' },
        ],
      },
      {
        text: '基础文档',
        items: [
          { text: '基础文档索引', link: '/basics/' },
          { text: 'MonoBehaviour 生命周期', link: '/basics/lifecycle' },
        ],
      },
      {
        text: '代码片段',
        items: [
          { text: '代码片段索引', link: '/snippets/' },
          { text: '安全获取并缓存组件', link: '/snippets/component-cache' },
        ],
      },
      {
        text: '问题案例',
        items: [
          { text: '问题案例索引', link: '/issues/' },
          { text: 'Android 构建排查清单', link: '/issues/android-build-checklist' },
        ],
      },
      {
        text: '资源索引',
        items: [
          { text: 'Git 仓库', link: '/repositories/' },
          { text: '常用工具', link: '/tools/' },
          { text: 'bundletool 使用速查', link: '/tools/bundletool' },
        ],
      },
    ],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索全部文档',
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询',
            backButtonTitle: '关闭搜索',
            noResultsText: '没有找到相关内容',
            footer: {
              selectText: '选择',
              selectKeyAriaLabel: '回车键',
              navigateText: '切换',
              navigateUpKeyAriaLabel: '向上箭头',
              navigateDownKeyAriaLabel: '向下箭头',
              closeText: '关闭',
              closeKeyAriaLabel: 'Escape 键',
            },
          },
        },
      },
    },
    outline: {
      level: [2, 3],
      label: '页面导航',
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
      },
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '目录',
    darkModeSwitchLabel: '外观',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    notFound: {
      title: '页面未找到',
      quote: '这个索引项暂时不存在，可能已经移动或尚未整理。',
      linkLabel: '返回首页',
      linkText: '返回首页',
    },
    footer: {
      message: '用 Git 留住验证过的经验。',
      copyright: 'Unity 工程台 · 内容请按实际项目版本复核',
    },
    socialLinks: repositoryUrl
      ? [{ icon: 'github', link: repositoryUrl, ariaLabel: 'GitHub 仓库' }]
      : [],
    editLink: repositoryUrl
      ? {
          pattern: `${repositoryUrl}/edit/main/docs/:path`,
          text: '在 GitHub 上编辑此页',
        }
      : undefined,
  },
})
