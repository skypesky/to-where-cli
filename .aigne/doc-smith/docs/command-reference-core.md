# Core Commands

The core commands are the foundation of `to-where-cli`, providing all the necessary tools for managing your path aliases. They allow you to add, list, remove, and clear aliases efficiently. For a more guided tour of how these commands work together, you might want to start with the [Basic Usage](./getting-started-basic-usage.md) guide.

This section provides a detailed reference for each core command.

## add

The `add` command creates a new alias for a specified directory path. If no path is provided, it defaults to the current working directory.

### Usage

```sh
tw add [alias] [address]
```

### Arguments & Options

| Name      | Description                                                                                             | Required |
|-----------|---------------------------------------------------------------------------------------------------------|----------|
| `alias`   | A short, memorable name for the address. If omitted, the name of the current directory will be used.      | No       |
| `address` | The directory path you want to create an alias for. If omitted, the current working directory is used.    | No       |
| `-f, --force` | If the alias already exists, this option will overwrite it. Without this flag, the command will fail. | No       |

### Examples

<x-cards>
<x-card data-title="Alias the current directory" data-icon="lucide:at-sign">
When run inside `/Users/dev/my-project`, this command creates an alias named `my-project` pointing to that directory.
</x-card>
<x-card data-title="Alias a specific directory" data-icon="lucide:folder-symlink">
This creates an alias named `api` that points to the specified absolute path.
</x-card>
<x-card data-title="Overwrite an existing alias" data-icon="lucide:replace">
If the `api` alias already exists, this command updates it to point to the new path.
</x-card>
</x-cards>

```sh title="Alias the current directory"
tw add
```

```sh title="Alias a specific directory with a custom name"
tw add api /Users/dev/work/project-api
```

```sh title="Force overwrite an existing alias"
tw add api /Users/dev/work/new-project-api --force
```

## rm

The `rm` command removes one or more aliases.

### Usage

```sh
tw rm [alias]
```

### Arguments

| Name    | Description                                                                                                 | Required |
|---------|-------------------------------------------------------------------------------------------------------------|----------|
| `alias` | The name of the alias to remove. If omitted, the command enters an interactive mode to select multiple aliases. | No       |

### Examples

<x-cards>
<x-card data-title="Remove a single alias" data-icon="lucide:trash-2">
This will permanently delete the alias named `project-api`.
</x-card>
<x-card data-title="Remove aliases interactively" data-icon="lucide:list-checks">
This launches a checklist where you can select multiple aliases to delete at once.
</x-card>
</x-cards>

```sh title="Remove a specific alias"
tw rm project-api
```

```sh title="Enter interactive removal mode"
tw rm
```

## ls

The `ls` command (aliased as `list`) displays your saved aliases and their corresponding paths. The list is sorted by the number of visits in descending order.

### Usage

```sh
tw ls [alias]
```

### Arguments

| Name    | Description                                                      | Required |
|---------|------------------------------------------------------------------|----------|
| `alias` | If provided, displays the details for only that specific alias. | No       |

### Examples

<x-cards>
<x-card data-title="List all aliases" data-icon="lucide:list">
Displays a formatted list of all saved aliases, their paths, and visit counts.
</x-card>
<x-card data-title="Show a specific alias" data-icon="lucide:search">
Looks for an alias named `api` and prints its details if found.
</x-card>
</x-cards>

```sh title="List all saved aliases"
tw ls
```

```sh title="Display details for a single alias"
tw ls api
```

## clean

The `clean` command removes all existing aliases from your configuration.

### Usage

```sh
tw clean
```

### Options

| Name          | Description                                                              | Required |
|---------------|--------------------------------------------------------------------------|----------|
| `-f, --force` | A safety measure to confirm the action. The command will not run without it. | Yes      |

### Examples

<x-cards>
<x-card data-title="Attempt to clean without force" data-icon="lucide:shield-alert">
This command will fail and show an error message, preventing accidental data loss.
</x-card>
<x-card data-title="Permanently delete all aliases" data-icon="lucide:shield-check">
This will wipe all saved aliases from your configuration file.
</x-card>
</x-cards>

```sh title="Attempt to run without the force flag (will fail)"
tw clean
```

```sh title="Forcefully remove all aliases"
tw clean --force
```