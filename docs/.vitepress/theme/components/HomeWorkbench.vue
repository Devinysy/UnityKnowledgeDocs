<script setup lang="ts">
import { withBase } from 'vitepress'

const sections = [
  {
    code: 'DOC',
    title: '基础文档',
    description: '把高频概念压缩成可快速确认的工程说明。',
    href: withBase('/basics/'),
    meta: '生命周期 · 序列化 · 编辑器',
  },
  {
    code: 'CS',
    title: '代码片段',
    description: '保留适用版本、依赖和注意事项，复制后能用。',
    href: withBase('/snippets/'),
    meta: 'Runtime · Editor · Build',
  },
  {
    code: 'FIX',
    title: '问题案例',
    description: '从现象进入，记录原因、处理步骤与验证结果。',
    href: withBase('/issues/'),
    meta: 'Android · iOS · AssetBundle',
  },
  {
    code: 'GIT',
    title: '仓库索引',
    description: '按用途和维护状态整理值得复用的项目。',
    href: withBase('/repositories/'),
    meta: '官方 · 示例 · 工具链',
  },
  {
    code: 'TOOL',
    title: '工具索引',
    description: '记录官方来源、输入输出和最短使用路径。',
    href: withBase('/tools/'),
    meta: 'AB · AAB · APK · 调试',
  },
]

const recentItems = [
  {
    label: '代码片段',
    title: '安全获取并缓存组件',
    href: withBase('/snippets/component-cache'),
    version: 'Unity 2021.3+',
  },
  {
    label: '问题案例',
    title: 'Android 构建排查清单',
    href: withBase('/issues/android-build-checklist'),
    version: 'Android',
  },
  {
    label: '工具速查',
    title: 'bundletool 使用速查',
    href: withBase('/tools/bundletool'),
    version: 'AAB',
  },
]

function openSearch() {
  const searchTrigger = document.querySelector<HTMLButtonElement>(
    '.DocSearch-Button, .VPNavBarSearch button',
  )

  if (searchTrigger) {
    searchTrigger.click()
    return
  }

  window.location.assign(withBase('/getting-started'))
}
</script>

<template>
  <main class="workbench-home">
    <section class="workbench-hero" aria-labelledby="workbench-title">
      <div class="workbench-hero__copy">
        <p class="workbench-eyebrow">
          <span class="axis-mark" aria-hidden="true">
            <i class="axis-mark__x"></i>
            <i class="axis-mark__y"></i>
            <i class="axis-mark__z"></i>
          </span>
          UNITY KNOWLEDGE WORKBENCH · BUILD 001
        </p>

        <h1 id="workbench-title">
          把重复踩过的坑，
          <span>变成下一次的捷径。</span>
        </h1>

        <p class="workbench-lead">
          集中整理 Unity 基础知识、可复制写法、问题案例、Git 仓库与常用工具。先搜索，再验证，最后把结论留在版本历史里。
        </p>

        <div class="workbench-actions">
          <button class="workbench-button workbench-button--primary" type="button" @click="openSearch">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="11" cy="11" r="6.5"></circle>
              <path d="m16 16 4 4"></path>
            </svg>
            打开全文搜索
            <kbd>Ctrl K</kbd>
          </button>
          <a class="workbench-button workbench-button--secondary" :href="withBase('/getting-started')">
            查看使用方式
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <dl class="workbench-facts" aria-label="平台特性">
          <div>
            <dt>内容来源</dt>
            <dd>Markdown + Git</dd>
          </div>
          <div>
            <dt>查询方式</dt>
            <dd>本地全文搜索</dd>
          </div>
          <div>
            <dt>访问设备</dt>
            <dd>桌面 / 手机</dd>
          </div>
        </dl>
      </div>

      <aside class="index-console" aria-label="知识分类索引">
        <header class="index-console__header">
          <span>WORKSPACE / UNITY-BASE</span>
          <span class="index-console__status"><i></i> READY</span>
        </header>

        <div class="index-console__query" aria-hidden="true">
          <span class="index-console__prompt">$</span>
          <span>find --scope workspace "构建失败"</span>
          <span class="index-console__cursor"></span>
        </div>

        <ol class="index-console__list">
          <li v-for="(section, index) in sections" :key="section.code">
            <a :href="section.href">
              <span class="index-console__number">{{ String(index + 1).padStart(2, '0') }}</span>
              <span class="index-console__entry">
                <strong>{{ section.title }}</strong>
                <small>{{ section.meta }}</small>
              </span>
              <span class="index-console__arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ol>

        <footer class="index-console__footer">
          <span>INDEXED LOCALLY</span>
          <span>VERSIONED BY GIT</span>
        </footer>
      </aside>
    </section>

    <section class="knowledge-map" aria-labelledby="knowledge-map-title">
      <header class="section-heading">
        <div>
          <p class="section-heading__label">KNOWLEDGE MAP</p>
          <h2 id="knowledge-map-title">从你手上的问题进入</h2>
        </div>
        <p>每类内容有固定模板和验证状态，避免只有链接、没有上下文。</p>
      </header>

      <div class="route-grid">
        <a v-for="section in sections" :key="section.code" class="route-card" :href="section.href">
          <span class="route-card__code">{{ section.code }}</span>
          <h3>{{ section.title }}</h3>
          <p>{{ section.description }}</p>
          <span class="route-card__meta">{{ section.meta }}</span>
          <span class="route-card__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </section>

    <section class="workbench-lower-grid">
      <article class="workflow-panel" aria-labelledby="workflow-title">
        <p class="section-heading__label">WORKFLOW</p>
        <h2 id="workflow-title">一条内容的维护路径</h2>
        <ol>
          <li>
            <span>01</span>
            <div>
              <strong>记录现象</strong>
              <p>写清版本、平台、报错和复现条件。</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <strong>验证结论</strong>
              <p>保留最小代码、处理步骤和实际结果。</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <strong>提交发布</strong>
              <p>推送到 Git，GitHub Pages 自动更新。</p>
            </div>
          </li>
        </ol>
      </article>

      <article class="recent-panel" aria-labelledby="recent-title">
        <div class="recent-panel__heading">
          <div>
            <p class="section-heading__label">START HERE</p>
            <h2 id="recent-title">示例内容</h2>
          </div>
          <a :href="withBase('/changelog')">更新记录 →</a>
        </div>

        <ul>
          <li v-for="item in recentItems" :key="item.title">
            <a :href="item.href">
              <span class="recent-panel__label">{{ item.label }}</span>
              <strong>{{ item.title }}</strong>
              <span class="recent-panel__version">{{ item.version }}</span>
            </a>
          </li>
        </ul>
      </article>
    </section>

    <section class="workbench-callout" aria-labelledby="callout-title">
      <div class="workbench-callout__mark" aria-hidden="true">U</div>
      <div>
        <p class="section-heading__label">KEEP IT VERIFIED</p>
        <h2 id="callout-title">文档不是收藏夹，而是验证过的工程记忆。</h2>
      </div>
      <a :href="withBase('/contributing')">查看整理规范 <span aria-hidden="true">→</span></a>
    </section>
  </main>
</template>
