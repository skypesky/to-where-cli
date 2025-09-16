# 安装

`to-where-cli` 是一个通过 npm (Node Package Manager) 分发的命令行工具。本指南将引导你完成安装过程。

## 先决条件

在开始之前，请确保你的系统上已安装 Node.js 和 npm。Npm 包含在 Node.js 的安装包中。

## 全局安装

为了使 `tw` 命令在终端的任何位置都可用，你应该全局安装该软件包。打开你的终端或命令提示符并运行以下命令：

```shell Installation Command icon=mdi:npm
npm install -g to-where-cli
```

`-g` 标志确保该软件包被全局安装，允许你从系统上的任何目录运行 `tw` 命令。

### 支持的平台

请注意，`to-where-cli` 目前支持以下操作系统：

- macOS
- Windows

## 验证安装

安装完成后，你可以通过运行帮助命令来验证安装是否成功：

```shell Verify Installation
tw -h
```

如果安装成功，该命令将显示帮助菜单，其中列出了所有可用的命令和选项。

---

现在你已经安装了 `to-where-cli`，可以开始学习其核心功能。请继续阅读下一部分，开始学习基本命令。

<x-card data-title="Basic Usage" data-href="/getting-started/basic-usage" data-icon="lucide:arrow-right">
一个快速教程，演示核心工作流程：添加、使用、列出和删除别名。
</x-card>