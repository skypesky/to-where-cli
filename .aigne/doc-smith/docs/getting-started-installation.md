# Installation

`to-where-cli` is a command-line utility distributed via npm (Node Package Manager). This guide will walk you through the installation process.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your system. Npm is included with the Node.js installation.

## Global Installation

To make the `tw` command available from anywhere in your terminal, you should install the package globally. Open your terminal or command prompt and run the following command:

```shell Installation Command icon=mdi:npm
npm install -g to-where-cli
```

The `-g` flag ensures that the package is installed globally, allowing you to run the `tw` command from any directory on your system.

### Supported Platforms

Please note that `to-where-cli` currently supports the following operating systems:

- macOS
- Windows

## Verify Installation

After the installation is complete, you can verify that it was successful by running the help command:

```shell Verify Installation
tw -h
```

If the installation was successful, this command will display the help menu, listing all available commands and options.

---

Now that you have `to-where-cli` installed, you are ready to learn its core functionalities. Proceed to the next section to get started with the basic commands.

<x-card data-title="Basic Usage" data-href="/getting-started/basic-usage" data-icon="lucide:arrow-right">
A quick tutorial demonstrating the core workflow: adding, using, listing, and removing an alias.
</x-card>