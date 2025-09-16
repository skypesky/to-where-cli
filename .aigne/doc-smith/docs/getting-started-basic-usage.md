# Basic Usage

Once `to-where-cli` is installed, you can immediately start managing your shortcuts. This guide walks you through the core workflow of adding, using, listing, and removing an alias with practical examples.

## Add an Alias

To create a new shortcut, use the `tw add` command. Provide a short, memorable alias followed by the full address you want to link it to.

```shell Add an alias icon=lucide:plus-circle
tw add home https://github.com/skypesky
```

## Open an Alias

To open the saved address in your default browser, simply run `tw` followed by the alias name. This is the primary function of the tool—turning a long URL into a quick command.

```shell Open with alias icon=lucide:send
tw home
```

## Update an Alias

If you need to change the address associated with an existing alias, use the `tw add` command again with the same alias and the new address. The CLI will automatically overwrite the previous entry. You can also use the `--force` flag to make this explicit.

```shell Update an alias icon=lucide:edit
tw add home https://github.com/skypesky/leetcode-for-javascript
```

## List Aliases

To see what aliases you have saved, use the `tw ls` command (or its full alias, `list`). You can either view all saved aliases or check the details for a specific one.

- **List all aliases:**

  ```shell List all aliases icon=lucide:list
  tw ls
  ```

- **List a specific alias:**

  ```shell List a specific alias icon=lucide:search
  tw ls home
  ```

## Remove an Alias

When you no longer need a shortcut, you can remove it with the `tw rm` command.

- **Remove by name:**

  Provide the alias name to delete it directly.

  ```shell Remove a specific alias icon=lucide:trash-2
  tw rm home
  ```

- **Remove interactively:**

  If you run `tw rm` without any arguments, it will launch an interactive prompt where you can select one or more aliases to delete from a list.

  ```shell Remove aliases interactively icon=lucide:mouse-pointer-click
  tw rm
  ```

This covers the fundamental workflow for managing your shortcuts. For a more exhaustive list of commands and their available options, proceed to the [Command Reference](./command-reference.md) section.