---
title: 代码片段
description: 带适用条件、验证信息和注意事项的 Unity 常用写法。
---

# 代码片段

<div class="doc-meta">
  <span>分类：可复制写法</span>
  <span>代码源：独立 .cs 文件</span>
  <span>要求：注明适用条件</span>
</div>

代码片段不是只展示几行语法。每个条目都要说明为什么这样写、应该放在哪个生命周期，以及哪些情况下不能直接复制。

<div class="resource-grid">
  <a class="resource-card" href="./component-cache">
    <span class="resource-card__type">RUNTIME / C#</span>
    <strong>安全获取并缓存组件</strong>
    <p>使用序列化引用和 TryGetComponent，初始化失败时尽早停止脚本。</p>
    <span class="resource-card__meta">Unity 2021.3+ · MonoBehaviour</span>
  </a>
</div>

## 建议分类

- Runtime 常用组件写法
- EditorWindow、PropertyDrawer 与批处理
- Addressables 加载与释放
- Android、iOS 平台桥接
- 构建管线与命令行
- Shader、URP 与材质处理

