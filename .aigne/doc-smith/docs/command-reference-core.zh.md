# 核心命令

`to-where-cli` 的核心命令是其基础，提供了管理路径别名所需的所有工具。通过这些命令，你可以高效地添加、列出、移除和清除别名。要更深入地了解这些命令如何协同工作，可以从 [基本用法](./getting-started-basic-usage.md) 指南开始。

本节为每个核心命令提供了详细的参考。

## add

`add` 命令为指定的目录路径创建一个新别名。如果未提供路径，则默认为当前工作目录。

### 用法

```sh
tw add [alias] [address]
```

### 参数与选项

| 名称 | 描述 | 是否必需 |
|---|---|---|
| `alias` | 地址的简短、易记的名称。如果省略，将使用当前目录的名称。 | 否 |
| `address` | 要为其创建别名的目录路径。如果省略，则使用当前工作目录。 | 否 |
| `-f, --force` | 如果别名已存在，此选项将覆盖它。没有此标志，命令将失败。 | 否 |

### 示例

<x-cards>
<x-card data-title="为当前目录创建别名" data-icon="lucide:at-sign">
在 `/Users/dev/my-project` 目录中运行时，此命令会创建一个名为 `my-project` 的别名，指向该目录。
</x-card>
<x-card data-title="为特定目录创建别名" data-icon="lucide:folder-symlink">
此命令创建一个名为 `api` 的别名，指向指定的绝对路径。
</x-card>
<x-card data-title="覆盖现有别名" data-icon="lucide:replace">
如果 `api` 别名已存在，此命令会将其更新，指向新的路径。
</x-card>
</x-cards>

```sh title="为当前目录创建别名"
tw add
```

```sh title="为特定目录指定自定义名称创建别名"
tw add api /Users/dev/work/project-api
```

```sh title="强制覆盖现有别名"
tw add api /Users/dev/work/new-project-api --force
```

## rm

`rm` 命令用于移除一个或多个别名。

### 用法

```sh
tw rm [alias]
```

### 参数

| 名称 | 描述 | 是否必需 |
|---|---|---|
| `alias` | 要移除的别名的名称。如果省略，命令将进入交互模式以选择多个别名。 | 否 |

### 示例

<x-cards>
<x-card data-title="移除单个别名" data-icon="lucide:trash-2">
这将永久删除名为 `project-api` 的别名。
</x-card>
<x-card data-title="以交互方式移除别名" data-icon="lucide:list-checks">
这将启动一个清单，你可以在其中一次性选择多个要删除的别名。
</x-card>
</x-cards>

```sh title="移除特定别名"
tw rm project-api
```

```sh title="进入交互式移除模式"
tw rm
```

## ls

`ls` 命令（别名为 `list`）显示你已保存的别名及其对应的路径。列表按访问次数降序排序。

### 用法

```sh
tw ls [alias]
```

### 参数

| 名称 | 描述 | 是否必需 |
|---|---|---|
| `alias` | 如果提供，则仅显示该特定别名的详细信息。 | 否 |

### 示例

<x-cards>
<x-card data-title="列出所有别名" data-icon="lucide:list">
显示所有已保存别名、其路径和访问次数的格式化列表。
</x-card>
<x-card data-title="显示特定别名" data-icon="lucide:search">
查找名为 `api` 的别名，如果找到则打印其详细信息。
</x-card>
</x-cards>

```sh title="列出所有已保存的别名"
tw ls
```

```sh title="显示单个别名的详细信息"
tw ls api
```

## clean

`clean` 命令从你的配置中移除所有现有的别名。

### 用法

```sh
tw clean
```

### 选项

| 名称 | 描述 | 是否必需 |
|---|---|---|
| `-f, --force` | 一项用于确认操作的安全措施。没有它，命令将不会运行。 | 是 |

### 示例

<x-cards>
<x-card data-title="尝试在没有 force 参数的情况下清理" data-icon="lucide:shield-alert">
此命令将失败并显示错误消息，以防止意外数据丢失。
</x-card>
<x-card data-title="永久删除所有别名" data-icon="lucide:shield-check">
这将从你的配置文件中清除所有已保存的别名。
</x-card>
</x-cards>

```sh title="尝试在没有 force 标志的情况下运行（将失败）"
tw clean
```

```sh title="强制移除所有别名"
tw clean --force
```