# Git 命令

`tw git` 命令提供了一套强大的快捷方式，可让你直接从命令行快速访问项目的仓库页面。它会自动检测你的远程仓库 URL，并在默认网页浏览器中打开相关页面——例如 issues、pull requests 或特定分支。

由于 `open` 是默认子命令，因此你可以互换使用 `tw git` 和 `tw git open`。

不带任何标志运行该命令，将打开当前分支的仓库页面。

```bash Basic Usage icon=lucide:terminal
# 在浏览器中打开当前分支
tw git
```

## 选项

以下选项可与 `tw git` 命令一起使用，以导航到特定页面。大多数选项可以组合使用。

| Option | Description |
|---|---|
| `-a`, `--actions` | 打开仓库的 Actions (CI/CD) 页面。 |
| `--author` | 打开最后一次提交作者的个人主页。 |
| `-b`, `--branch [branch]` | 打开特定分支的页面。如果未提供名称，则默认为当前分支。 |
| `-c`, `--commit [hash]` | 打开特定提交的页面。如果未提供哈希值，则默认为最新提交 (`HEAD`)。 |
| `--committer` | 打开最后一次提交的提交者的个人主页。 |
| `-f`, `--file <filePath>` | 打开当前分支中特定文件的页面。 |
| `--find` | 打开当前分支的文件查找/搜索页面。 |
| `--first-commit` | 打开仓库历史记录中第一次提交的页面。 |
| `-i`, `--issue` | 打开仓库的 issues 列表页面。 |
| `-m`, `--main` | 打开仓库的主页面。 |
| `-p`, `--pull-request` | 打开仓库的 pull request 列表页面。 |
| `--pull [branch]` | 打开“新建 Pull Request”页面。用于比较的分支默认为你当前所在的分支或指定的分支。 |
| `-r`, `--release` | 打开仓库的 releases 页面。 |
| `-s`, `--settings` | 打开仓库的 settings 页面。 |
| `--star` | 打开仓库的 stargazers 页面。 |

## 使用示例

以下是一些关于如何使用 `tw git` 命令的实际示例。

### 查看 Pull Request

如需快速查看项目的待处理 pull request：

```bash View Pull Requests icon=lucide:git-pull-request
# 打开所有 pull request 的列表
tw git -p
```

### 创建新的 Pull Request

推送新的功能分支后，你可以使用此命令发起一个 pull request。

```bash Create a Pull Request icon=lucide:git-pull-request-create
# 假设你当前位于名为 'feat/new-feature' 的分支上
# 这将打开一个页面，用于创建一个从 'feat/new-feature' 到默认分支的 PR。
tw git --pull

# 你也可以指定用于创建 PR 的分支
tw git --pull feat/another-feature
```

### 检查提交

无需离开终端，即可轻松查看任何提交的详细信息。

```bash Inspect a Commit icon=lucide:git-commit
# 打开当前分支上最新提交的页面
tw git -c

# 打开特定提交哈希值的页面
tw git -c a1b2c3d4e5f6
```

### 查看特定文件

如需查看文件内容或分享其链接：

```bash View a File icon=lucide:file-code
# 在浏览器中打开当前分支的 'package.json' 文件
tw git -f src/cli/git/open.ts
```

---

通过这些命令，你可以简化工作流程，减少在终端和浏览器之间的切换。接下来，你可能希望探索如何使用[搜索命令](./command-reference-search.md)直接从终端执行网页搜索。