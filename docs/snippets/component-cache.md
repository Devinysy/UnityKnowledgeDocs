---
title: 安全获取并缓存组件
description: 在 Awake 中缓存组件，并在依赖缺失时给出明确错误。
---

# 安全获取并缓存组件

<div class="doc-meta">
  <span data-status="verified">状态：已验证</span>
  <span>Unity：2021.3+</span>
  <span>平台：通用</span>
  <span>验证日期：2026-09-22</span>
</div>

适合必须依赖同一 GameObject 上某个组件的脚本。优先允许 Inspector 显式赋值；未赋值时再尝试从当前对象获取。

## 代码

<<< ./code/CachedComponentExample.cs{7-21 csharp:line-numbers}

## 为什么这样写

- `Transform` 直接在 `Awake` 缓存，避免业务代码反复表达同一依赖。
- `[SerializeField]` 允许在 Inspector 中显式指定 `Rigidbody`。
- 未指定时使用 `TryGetComponent`，不会依赖异常流程。
- 依赖缺失时打印带上下文的错误并禁用脚本，避免后续产生一连串空引用。

## 不适用场景

- 依赖组件可能在运行时才动态添加。
- 目标组件位于子节点、父节点或另一个对象。
- 项目已经使用依赖注入容器或统一初始化框架。

这些情况下应把依赖关系明确建模，而不是扩大 `GetComponent` 的搜索范围来隐藏结构问题。

