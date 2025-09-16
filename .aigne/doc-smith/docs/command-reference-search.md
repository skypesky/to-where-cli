# Search Commands

The `to-where-cli` includes a set of convenient subcommands that allow you to perform searches on various developer platforms and search engines directly from your command-line interface. This feature streamlines your workflow by eliminating the need to switch to a browser for common lookups.

## NPM Search

The `tw npm` command is a powerful tool for interacting with the npm registry. You can use it to search for packages or navigate directly to specific tabs on a package's page, such as its versions, dependencies, or source code.

### Basic Usage

To perform a general search, simply provide a keyword.

```shell
# Search for packages related to "react"
tw npm react

# If no keyword is provided, it opens the npm homepage
tw npm
```

### Options

The `npm` subcommand comes with several options to take you to specific pages for a given package.

| Option | Alias | Description | Example |
|---|---|---|---|
| `--code` | `-c` | Opens the package's code page on npm. | `tw npm react -c` |
| `--dependencies` | `-d` | Opens the package's dependencies page. | `tw npm express -d` |
| `--version` | `-v` | Opens the package's versions page. | `tw npm lodash -v` |
| `--run-kit` | `-r` | Opens the package on RunKit for interactive testing. | `tw npm moment -r` |

## Generic Search Commands

Beyond the specialized `npm` command, `to-where-cli` supports several popular search engines. These commands follow a simple and consistent pattern.

<x-cards data-columns="2">
  <x-card data-title="GitHub Search" data-icon="lucide:github">
    The `github` command allows you to search for repositories, code, and more directly on GitHub.
  </x-card>
  <x-card data-title="Google Search" data-icon="lucide:search">
    The `google` command launches a new search on Google with your specified keywords.
  </x-card>
  <x-card data-title="Bing Search" data-icon="lucide:search-code">
    The `bing` command performs a search on the Bing search engine.
  </x-card>
  <x-card data-title="Baidu Search" data-icon="lucide:search-check">
    The `baidu` command is available for users who prefer to use the Baidu search engine.
  </x-card>
</x-cards>

### Usage Examples

```shell GitHub Search icon=lucide:github
# Search GitHub for repositories matching "to-where-cli"
tw github to-where-cli
```

```shell Google Search icon=lucide:search
# Search Google for "commander.js examples"
tw google "commander.js examples"
```

```shell Bing Search icon=lucide:search-code
# Search Bing for "typescript best practices"
tw bing "typescript best practices"
```

```shell Baidu Search icon=lucide:search-check
# Search Baidu for "Node.js 教程"
tw baidu "Node.js 教程"
```

---

These search commands help integrate external lookups seamlessly into your development environment. If you're interested in how these commands are built or want to contribute, head over to our [Development Guide](./development.md).