# Development Guide

Welcome to the `to-where-cli` development guide! This section is for anyone interested in contributing to the project. Here, you'll find the necessary information to get your development environment set up and understand the core workflows for building, testing, and managing the codebase.

## Getting Started

Before you begin, ensure you have Node.js and pnpm installed on your system.

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/skypesky/to-where-cli.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd to-where-cli
    ```

3.  **Install dependencies:**

    The project uses pnpm for package management. To install all dependencies, run:

    ```bash
    pnpm install
    ```

    If you encounter any issues, you can perform a clean re-installation using the `reinstall` script:

    ```bash
    npm run reinstall
    ```

## Core Development Topics

This guide is divided into the following sections to provide detailed information on specific aspects of development. Please explore them to get a comprehensive understanding of the project.

<x-cards data-columns="2">
  <x-card data-title="Project Structure" data-icon="lucide:folder-tree" data-href="/development/project-structure">
    Get an overview of the project's source code layout. This section explains the purpose of key directories and files to help you navigate the codebase efficiently.
  </x-card>
  <x-card data-title="Available Scripts" data-icon="lucide:terminal" data-href="/development/scripts">
    A complete reference for the npm scripts defined in package.json. Learn how to build, test, lint, and deploy the application using the provided commands.
  </x-card>
</x-cards>

## Key Technologies

- **TypeScript**: The project is written in TypeScript for type safety and a better developer experience. Configuration can be found in `tsconfig.json`.
- **Commander.js**: Used for building the command-line interface.
- **Jest**: The testing framework used for writing and running unit tests. You can find its configuration in `jest.config.js`.
- **ESBuild**: Used for fast and efficient bundling of the TypeScript source code into distributable JavaScript.
- **ESLint**: For linting the codebase to ensure code quality and consistency.

We look forward to your contributions.