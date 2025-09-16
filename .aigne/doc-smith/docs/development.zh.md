# 开发指南

欢迎阅读 `to-where-cli` 开发指南！本部分面向所有有兴趣为本项目做出贡献的开发者。在这里，你将找到设置开发环境所需的信息，并了解构建、测试和管理代码库的核心工作流程。

## 快速入门

在开始之前，请确保你的系统上已安装 Node.js 和 pnpm。

1.  **克隆仓库：**

    ```bash
    git clone https://github.com/skypesky/to-where-cli.git
    ```

2.  **导航到项目目录：**

    ```bash
    cd to-where-cli
    ```

3.  **安装依赖：**

    本项目使用 pnpm 进行包管理。要安装所有依赖，请运行：

    ```bash
    pnpm install
    ```

    如果遇到任何问题，你可以使用 `reinstall` 脚本执行全新安装：

    ```bash
    npm run reinstall
    ```

## 核心开发主题

本指南分为以下几个部分，详细介绍开发的具体方面。请浏览这些部分，以全面了解本项目。

<x-cards data-columns="2">
  <x-card data-title="项目结构" data-icon="lucide:folder-tree" data-href="/development/project-structure">
    概述项目的源代码布局。本节将说明关键目录和文件的用途，帮助你高效地浏览代码库。
  </x-card>
  <x-card data-title="可用脚本" data-icon="lucide:terminal" data-href="/development/scripts">
    `package.json` 中定义的 npm 脚本的完整参考。了解如何使用提供的命令来构建、测试、进行代码检查以及部署应用程序。
  </x-card>
</x-cards>

## 关键技术

- **TypeScript**：项目采用 TypeScript 编写，以确保类型安全并提供更好的开发体验。相关配置可在 `tsconfig.json` 文件中找到。
- **Commander.js**：用于构建命令行界面。
- **Jest**：用于编写和运行单元测试的测试框架。其配置位于 `jest.config.js` 文件中。
- **ESBuild**：用于将 TypeScript 源代码快速、高效地打包为可分发的 JavaScript 文件。
- **ESLint**：用于对代码库进行代码规范检查，以确保代码质量和一致性。

我们期待你的贡献。