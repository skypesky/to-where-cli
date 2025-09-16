# 搜索命令

`to-where-cli` 包含一组便捷的子命令，允许你直接从命令行界面在各种开发者平台和搜索引擎上执行搜索。此功能无需切换到浏览器进行常见查找，从而简化了你的工作流程。

## NPM 搜索

`tw npm` 命令是与 npm 注册表交互的强大工具。你可以用它来搜索包，或直接导航到包页面的特定选项卡，例如其版本、依赖项或源代码。

### 基本用法

要执行常规搜索，只需提供一个关键字。

```shell
# 搜索与 "react" 相关的包
tw npm react

# 如果未提供关键字，则会打开 npm 主页
tw npm
```

### 选项

`npm` 子命令附带了几个选项，可将你带到指定包的特定页面。

| 选项 | 别名 | 描述 | 示例 |
|---|---|---|---|
| `--code` | `-c` | 在 npm 上打开包的代码页面。 | `tw npm react -c` |
| `--dependencies` | `-d` | 打开包的依赖项页面。 | `tw npm express -d` |
| `--version` | `-v` | 打开包的版本页面。 | `tw npm lodash -v` |
| `--run-kit` | `-r` | 在 RunKit 上打开包以进行交互式测试。 | `tw npm moment -r` |

## 通用搜索命令

除了专门的 `npm` 命令外，`to-where-cli` 还支持多个流行的搜索引擎。这些命令遵循简单一致的模式。

<x-cards data-columns="2">
  <x-card data-title="GitHub 搜索" data-icon="lucide:github">
    `github` 命令允许你直接在 GitHub 上搜索仓库、代码等。
  </x-card>
  <x-card data-title="Google 搜索" data-icon="lucide:search">
    `google` 命令会使用你指定的关键字在 Google 上启动新的搜索。
  </x-card>
  <x-card data-title="Bing 搜索" data-icon="lucide:search-code">
    `bing` 命令会在 Bing 搜索引擎上执行搜索。
  </x-card>
  <x-card data-title="百度搜索" data-icon="lucide:search-check">
    `baidu` 命令适用于偏好使用百度搜索引擎的用户。
  </x-card>
</x-cards>

### 用法示例

```shell GitHub Search icon=lucide:github
# 在 GitHub 上搜索匹配 "to-where-cli" 的仓库
tw github to-where-cli
```

```shell Google Search icon=lucide:search
# 在 Google 上搜索 "commander.js examples"
tw google "commander.js examples"
```

```shell Bing Search icon=lucide:search-code
# 在 Bing 上搜索 "typescript best practices"
tw bing "typescript best practices"
```

```shell Baidu Search icon=lucide:search-check
# 在百度上搜索 "Node.js 教程"
tw baidu "Node.js 教程"
```

---

这些搜索命令有助于将外部查找无缝集成到你的开发环境中。如果你对这些命令的构建方式感兴趣或想要做出贡献，请参阅我们的[开发指南](./development.md)。