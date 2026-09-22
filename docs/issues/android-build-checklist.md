---
title: Android 构建排查清单
description: Unity Android 构建失败时的分层定位方法。
---

# Android 构建排查清单

<div class="doc-meta">
  <span data-status="verified">状态：流程已验证</span>
  <span>平台：Android</span>
  <span>产物：APK / AAB</span>
  <span>验证日期：2026-09-22</span>
</div>

这是一份通用排查顺序，不对应单一报错。目标是先找到最早的有效错误，再缩小到环境、依赖、资源或签名层。

## 1. 保存可复现信息

- Unity 完整版本号和目标平台模块版本
- 当前使用的 JDK、SDK、NDK 与 Gradle 来源
- APK 或 AAB、Development Build、脚本后端与目标架构
- 最近一次成功构建与失败构建之间的变更

## 2. 找到第一条有效错误

不要从日志最后的 `Build failed` 开始判断。向上搜索第一段包含具体文件、依赖、任务名或异常类型的错误，并保留它前后的上下文。

常见关键词：

```text
FAILURE: Build failed with an exception
Execution failed for task
Could not resolve
Duplicate class
Manifest merger failed
SDK location not found
Keystore
```

## 3. 按层排查

| 层级 | 重点检查 |
| --- | --- |
| 环境 | Unity 内置或外部 JDK/SDK/NDK 是否与项目配置一致 |
| Gradle | 模板是否过期，插件和 Gradle 版本是否互相兼容 |
| 依赖 | 是否重复引入同一 Android 库，版本是否冲突 |
| Manifest | provider、权限、exported、minSdk 等合并结果 |
| 资源 | 文件名、资源冲突、压缩方式及路径长度 |
| 签名 | Keystore 路径、别名、密码和证书有效性 |

## 4. 做最小化验证

1. 备份当前失败日志。
2. 关闭与问题无关的自定义构建步骤。
3. 从最近新增的包或 Android 插件开始逐项隔离。
4. 清理项目内明确可再生成的构建缓存后重新构建。
5. 在相同环境中创建最小项目验证平台工具链。

::: danger 不要盲目删除
不要在原因不明时删除整个工程、用户资源或未提交内容。只清理已确认可以再生成的缓存目录，并先保留失败日志和版本信息。
:::

## 5. 记录结论

修复后补充真正的根因、修改项、验证产物和设备结果。只记录“清缓存后好了”无法帮助下一次判断问题是否相同。

