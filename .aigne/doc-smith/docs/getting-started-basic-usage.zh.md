# 基本用法

安装 `to-where-cli` 后，你就可以立即开始管理你的快捷方式。本指南将通过实际示例，引导你完成添加、使用、列出和删除别名的核心工作流程。

## 添加别名

要创建一个新的快捷方式，请使用 `tw add` 命令。提供一个简短易记的别名，然后跟上你想要链接到的完整地址。

```shell 添加一个别名 icon=lucide:plus-circle
tw add home https://github.com/skypesky
```

## 打开别名

要在默认浏览器中打开已保存的地址，只需运行 `tw` 并跟上别名即可。这是该工具的主要功能——将长 URL 转换为快速命令。

```shell 使用别名打开 icon=lucide:send
tw home
```

## 更新别名

如果你需要更改与现有别名关联的地址，请再次使用 `tw add` 命令，并提供相同的别名和新地址。CLI 将自动覆盖之前的条目。你也可以使用 `--force` 标志来明确此操作。

```shell 更新一个别名 icon=lucide:edit
tw add home https://github.com/skypesky/leetcode-for-javascript
```

## 列出别名

要查看你已保存的别名，请使用 `tw ls` 命令（或其完整别名 `list`）。你可以查看所有已保存的别名，也可以检查特定别名的详细信息。

- **列出所有别名：**

  ```shell 列出所有别名 icon=lucide:list
  tw ls
  ```

- **列出特定别名：**

  ```shell 列出特定别名 icon=lucide:search
  tw ls home
  ```

## 删除别名

当你不再需要某个快捷方式时，可以使用 `tw rm` 命令将其删除。

- **按名称删除：**

  提供别名以直接删除。

  ```shell 删除特定别名 icon=lucide:trash-2
  tw rm home
  ```

- **交互式删除：**

  如果运行不带任何参数的 `tw rm` 命令，它将启动一个交互式提示，你可以在列表中选择一个或多个要删除的别名。

  ```shell 交互式删除别名 icon=lucide:mouse-pointer-click
  tw rm
  ```

以上涵盖了管理快捷方式的基本工作流程。要获取更详尽的命令列表及其可用选项，请继续阅读[命令参考](./command-reference.md)部分。