---
title: 问题案例
description: 从错误现象出发，记录原因、解决步骤和验证结果。
---

# 问题案例

<div class="doc-meta">
  <span>分类：排障记录</span>
  <span>入口：错误现象</span>
  <span>要求：必须记录验证结果</span>
</div>

问题案例应使用报错关键词和用户实际看到的现象命名，方便从搜索直接进入。不要只按内部模块名称归档。

<div class="resource-grid">
  <a class="resource-card" href="./android-build-checklist">
    <span class="resource-card__type">ANDROID / BUILD</span>
    <strong>Android 构建排查清单</strong>
    <p>先固定环境与第一条有效错误，再逐层定位 Gradle、依赖和签名问题。</p>
    <span class="resource-card__meta">Gradle · AAB · APK</span>
  </a>
</div>

## 建议记录的信息

- Unity 完整版本号
- Android Gradle Plugin、Gradle、JDK 和 SDK 信息
- 构建目标与 Development Build 状态
- 第一条有效错误，而不是最后一条失败摘要
- 是否能够在空项目或最小工程中复现
- 最终验证使用的设备或构建环境

