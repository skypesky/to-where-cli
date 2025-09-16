# Command Reference

The `to-where-cli` (`tw`) provides a simple yet powerful set of commands to manage your URL aliases and perform quick searches directly from the command line. This section serves as a high-level overview of all available commands and their functions. For detailed usage, options, and examples, please refer to the specific sub-sections.

## Command Overview

The following table provides a summary of all commands available in `to-where-cli`:

| Command | Description |
|---|---|
| `tw <alias>` | The primary command. Opens the URL associated with a given alias in your default browser. |
| `tw add` | Adds a new alias or updates the URL of an existing one. |
| `tw rm` | Removes a specified alias. |
| `tw ls` | Lists all saved aliases or displays the URL for a specific alias. |
| `tw clean` | Removes all saved aliases from the configuration. |
| `tw git` | A subcommand to quickly open pages of a Git repository (e.g., issues, PRs). |
| `tw npm` | A subcommand to search for a package on npmjs.com. |
| `tw github` | A subcommand to search for repositories or code on GitHub. |
| `tw google` | A subcommand to perform a Google search. |
| `tw baidu` | A subcommand to perform a Baidu search. |
| `tw bing` | A subcommand to perform a Bing search. |

## Detailed Guides

For a comprehensive guide to each command group, including all subcommands and options, please explore the following sections:

<x-cards data-columns="3">
  <x-card data-title="Core Commands" data-icon="lucide:box" data-href="/command-reference/core">
    Detailed documentation for the core alias management commands: add, rm, ls, and clean.
  </x-card>
  <x-card data-title="Git Command" data-icon="lucide:git-branch" data-href="/command-reference/git">
    Explains how to use the `tw git` subcommand to quickly open various pages of a git repository.
  </x-card>
  <x-card data-title="Search Commands" data-icon="lucide:search" data-href="/command-reference/search">
    Covers the various search-related subcommands (npm, github, google, etc.) for direct command-line searches.
  </x-card>
</x-cards>

## Global Options

These options can be used with the main `tw` command.

| Option | Description |
|---|---|
| `-h`, `--help` | Display help information for any command or subcommand. |
| `-V`, `--version` | Output the current version number of `to-where-cli`. |

To begin managing your aliases, we recommend starting with the [Core Commands](./command-reference-core.md) guide.