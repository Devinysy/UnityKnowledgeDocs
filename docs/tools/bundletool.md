---
title: bundletool 使用速查
description: 验证 AAB、生成 APK Set 和通用 APK 的常用命令。
---

# bundletool 使用速查

<div class="doc-meta">
  <span data-status="verified">来源：Google 官方</span>
  <span>输入：AAB</span>
  <span>输出：APKS / APK</span>
  <span>检查日期：2026-09-22</span>
</div>

[bundletool](https://github.com/google/bundletool) 是 Android App Bundle 的官方命令行工具。下载时使用官方 Releases，并把文件重命名为便于脚本维护的名称，例如 `bundletool-all.jar`。

## 前置检查

```powershell
java -version
java -jar .\bundletool-all.jar version
```

## 验证 AAB

```powershell
java -jar .\bundletool-all.jar validate `
  --bundle=.\app-release.aab
```

## 生成通用 APK Set

```powershell
java -jar .\bundletool-all.jar build-apks `
  --bundle=.\app-release.aab `
  --output=.\app-release.apks `
  --mode=universal
```

`.apks` 本质上是归档文件。复制一份并改为 `.zip` 后解压，可以在其中找到通用 APK。

## 使用签名生成 APK Set

```powershell
java -jar .\bundletool-all.jar build-apks `
  --bundle=.\app-release.aab `
  --output=.\app-release.apks `
  --ks=.\release.keystore `
  --ks-key-alias=release `
  --mode=universal
```

命令执行过程中会安全地请求密码时，就在交互提示中输入。不要把真实密码直接写进脚本、命令历史或文档。

## 安装到已连接设备

```powershell
java -jar .\bundletool-all.jar install-apks `
  --apks=.\app-release.apks
```

## 常见注意事项

- 每次覆盖同名输出前，先确认旧文件是否仍需保留。
- 用于正式发布时，应使用项目规定的签名流程，不要临时创建未知证书。
- 参数可能随版本变化，遇到差异时运行 `help` 并查看官方文档。
- 生成通用 APK 适合本地检查，不等同于商店按设备拆分后的真实交付结果。

参考：[bundletool 官方仓库](https://github.com/google/bundletool) · [Android 官方命令说明](https://developer.android.com/tools/bundletool)
