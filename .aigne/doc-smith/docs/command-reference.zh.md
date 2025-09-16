# 命令参考

`to-where-cli` (`tw`) 提供了一套简单而强大的命令，用于直接从命令行管理 URL 别名和执行快速搜索。本节对所有可用命令及其功能进行了高级概述。有关详细用法、选项和示例，请参阅具体的小节。

## 命令概述

下表总结了 `to-where-cli` 中所有可用的命令：

| Command | Description |
|---|---|
| `tw <alias>` | 主命令。在默认浏览器中打开与给定别名关联的 URL。 |
| `tw add` | 添加新别名或更新现有别名的 URL。 |
| `tw rm` | 移除指定的别名。 |
| `tw ls` | 列出所有已保存的别名或显示特定别名的 URL。 |
| `tw clean` | 从配置中移除所有已保存的别名。 |
| `tw git` | 一个用于快速打开 Git 仓库页面（例如，issues、PRs）的子命令。 |
| `tw npm` | 一个用于在 npmjs.com 上搜索包的子命令。 |
| `tw github` | 一个用于在 GitHub 上搜索仓库或代码的子命令。 |
| `tw google` | 一个用于执行 Google 搜索的子命令。 |
| `tw baidu` | 一个用于执行百度搜索的子命令。 |
| `tw bing` | 一个用于执行必应搜索的子命令。 |

## 详细指南

要获取每个命令组（包括所有子命令和选项）的全面指南，请浏览以下部分：

<x-cards data-columns="3">
  <x-card data-title="核心命令" data-icon="lucide:box" data-href="/command-reference/core">
    核心别名管理命令的详细文档：add、rm、ls 和 clean。
  </x-card>
  <x-card data-title="Git 命令" data-icon="lucide:git-branch" data-href="/command-reference/git">
    解释如何使用 `tw git` 子命令快速打开 Git 仓库的各个页面。
  </x-card>
  <x-card data-title="搜索命令" data-icon="lucide:search" data-href="/command-reference/search">
    涵盖各种与搜索相关的子命令（npm、github、google 等），用于直接进行命令行搜索。
  </x-card>
</x-cards>

## 全局选项

这些选项可与主 `tw` 命令一起使用。

| Option | Description |
|---|---|
| `-h`, `--help` | 显示任何命令或子命令的帮助信息。 |
| `-V`, `--version` | 输出 `to-where-cli` 的当前版本号。 |

要开始管理您的别名，我们建议从 [核心命令](./command-reference-core.md) 指南开始。