# Project Structure

This document provides an overview of the `to-where-cli` source code layout, explaining the purpose of key directories and files. Understanding the structure is essential for anyone looking to contribute to the project or understand its internal workings.

The project follows a layered architecture that separates concerns, making the codebase modular and maintainable.

## Architectural Overview

The codebase is organized into four main layers: the CLI Layer, Core Logic, Interfaces, and Data Models. This design promotes a clean separation between the command-line interface, business logic, data contracts, and data structures.

```d2 Architectural Diagram
direction: down

CLI-Layer: {
  label: "CLI Layer"
  shape: rectangle
  cli-index: {
    label: "cli/index.ts"
  }
}

Core-Logic: {
  label: "Core Logic"
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
  label: "Interfaces & Contracts"
  shape: rectangle
  config-protocol: {
    label: "protocol/config.protocol.ts"
  }
  worker-protocol: {
    label: "protocol/worker.protocol.ts"
  }
}

Data-Models: {
  label: "Data Models"
  shape: rectangle
  point-meta: {
    label: "meta/point.meta.ts"
  }
  config-meta: {
    label: "meta/config.meta.ts"
  }
}

# High-level dependencies
CLI-Layer -> Core-Logic: "Uses"
Core-Logic -> Interfaces: "Implements"
Core-Logic -> Data-Models: "Uses"
Interfaces -> Data-Models: "Uses"
```

## Directory Breakdown

Here is a detailed breakdown of the key directories and files within the `src` folder.

| Path                  | Description                                                                                                        |
| --------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `src/`                | The root directory for all application source code.                                                                |
| `src/cli/`            | Contains the entry point for the command-line executable. It is responsible for parsing command-line arguments and initiating the program. |
| `src/classes/`        | This is the core of the application, containing the main business logic, command definitions, and implementations of the protocols. |
| `src/protocol/`       | Defines the TypeScript interfaces (contracts) that decouple the core logic from its implementation. This allows for easier testing and maintenance. |
| `src/meta/`           | Holds the definitions for the primary data structures (models) used throughout the application, such as `Point` and `Config`. |

## Key Files

The following files are central to the functionality of `to-where-cli`:

| File Path                       | Description                                                                                                                            |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `src/cli/index.ts`              | The executable entry point for the CLI. It initializes and runs the program defined in `create-program.ts`.                            |
| `src/classes/create-program.ts` | Constructs the main program instance, defining all available commands, options, and their corresponding actions.                       |
| `src/protocol/config.protocol.ts` | Defines the `ConfigProtocol` interface, ensuring a consistent contract for configuration management (e.g., `get`, `set`, `add`, `delete`). |
| `src/protocol/worker.protocol.ts` | Defines the `WorkerProtocol` interface, outlining the required methods for managing aliases (e.g., `open`, `add`, `list`, `clean`).     |
| `src/meta/point.meta.ts`        | Defines the `Point` type, which represents a single alias record containing at least an alias and its target path.                   |
| `src/meta/config.meta.ts`       | Defines the `Config` type, which represents the overall configuration structure, likely containing a collection of `Point` objects.    |

---

Now that you have an understanding of the project's structure, you can explore the available development scripts to build, test, and run the application. See the [Available Scripts](./development-scripts.md) guide for more details.