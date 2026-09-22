---
title: 贡献指南
description: 统一问题、代码、仓库和工具条目的写法。
---

# 贡献指南

<div class="doc-meta">
  <span>内容规范</span>
  <span>语言：简体中文</span>
  <span>验证日期：2026-09-22</span>
</div>

这里的目标不是收藏尽可能多的链接，而是保存下一次可以直接复用的工程结论。

## 问题案例

按照以下顺序组织：

1. 问题现象与完整报错摘要
2. Unity 版本、目标平台和构建环境
3. 根因
4. 处理步骤
5. 验证方式与结果
6. 可能的副作用或不适用场景
7. 参考来源与最后验证日期

不要只写“修改某个配置即可”。应说明为什么修改，以及如何判断问题已经解决。

## 代码片段

- 将可编译代码保存在对应页面的 `code/` 目录。
- 文档通过 VitePress 的代码导入功能引用源码。
- 明确命名空间、依赖包、线程环境和生命周期要求。
- 记录适用的最低 Unity 版本。
- 不在代码中放入真实 Token、证书、密码或内部地址。

## Git 仓库

至少记录：

- 仓库用途
- 官方或社区来源
- License 链接
- 适用 Unity 版本
- 是否归档
- 最后检查日期
- 推荐使用的具体目录、示例或 Release

## 工具

工具条目必须优先链接官方发布页，不转载未知来源的可执行文件。需要额外说明：

- 支持系统
- 输入和输出格式
- 最短操作路径
- 潜在风险
- 当前条目验证日期

涉及 AssetBundle、APK、AAB 或资源提取时，只处理自己拥有或获得授权的内容。

## 提交信息建议

```text
docs: add Addressables loading example
fix: correct Android build checklist
chore: update repository verification date
```

