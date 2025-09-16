# 项目结构

本文档概述了 `to-where-cli` 的源代码布局，解释了关键目录和文件的用途。对于希望为项目做出贡献或了解其内部工作原理的人员来说，理解项目结构至关重要。

该项目遵循分层架构，实现了关注点分离，从而使代码库更具模块化和可维护性。

## 架构概述

代码库分为四个主要层次：CLI 层、核心逻辑、接口和数据模型。这种设计促进了命令行界面、业务逻辑、数据合约和数据结构之间的清晰分离。

```d2 架构图
direction: down

CLI-Layer: {
  label: "CLI 层"
  shape: rectangle
  cli-index: {
    label: "cli/index.ts"
  }
}

Core-Logic: {
  label: "核心逻辑"
  shape: rectangle
  create-program: {
    label: "classes/create-program.ts"
  }
  simple-config: {
    label: "classes/simple-config.ts"
  }
  simple-worker: {
    label: "classes/simple-worker.ts"
  }
}

Interfaces: {
  label: "接口与合约"
  shape: rectangle
  config-protocol: {
    label: "protocol/config.protocol.ts"
  }
  worker-protocol: {
    label: "protocol/worker.protocol.ts"
  }
}

Data-Models: {
  label: "数据模型"
  shape: rectangle
  point-meta: {
    label: "meta/point.meta.ts"
  }
  config-meta: {
    label: "meta/config.meta.ts"
  }
}

# 高层级依赖
CLI-Layer -> Core-Logic: "使用"
Core-Logic -> Interfaces: "实现"
Core-Logic -> Data-Models: "使用"
Interfaces -> Data-Models: "使用"
```

## 目录解析

以下是 `src` 文件夹内关键目录和文件的详细解析。

| Path                  | Description                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/`                | 所有应用程序源代码的根目录。                                                                                               |
| `src/cli/`            | 包含命令行可执行文件的入口点，负责解析命令行参数和启动程序。 |
| `src/classes/`        | 应用程序的核心，包含主要业务逻辑、命令定义以及协议的实现。 |
| `src/protocol/`       | 定义了 TypeScript 接口（合约），将核心逻辑与其实现解耦。这使得测试和维护更加容易。 |
| `src/meta/`           | 包含整个应用程序中使用的主要数据结构（模型）的定义，例如 `Point` 和 `Config`。 |

## 关键文件

以下文件是 `to-where-cli` 功能的核心：

| File Path                       | Description                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `src/cli/index.ts`              | CLI 的可执行入口点。它初始化并运行在 `create-program.ts` 中定义的程序。                            |
| `src/classes/create-program.ts` | 构建主程序实例，定义所有可用的命令、选项及其对应的操作。                       |
| `src/protocol/config.protocol.ts` | 定义了 `ConfigProtocol` 接口，确保配置管理（例如 `get`、`set`、`add`、`delete`）有一致的合约。 |
| `src/protocol/worker.protocol.ts` | 定义了 `WorkerProtocol` 接口，概述了管理别名所需的方法（例如 `open`、`add`、`list`、`clean`）。     |
| `src/meta/point.meta.ts`        | 定义了 `Point` 类型，它表示一条包含至少一个别名及其目标路径的别名记录。                   |
| `src/meta/config.meta.ts`       | 定义了 `Config` 类型，它表示整体配置结构，可能包含一个 `Point` 对象的集合。    |

---

既然你已经了解了项目结构，就可以探索可用的开发脚本来构建、测试和运行应用程序。更多详情请参阅[可用脚本](./development-scripts.md)指南。
