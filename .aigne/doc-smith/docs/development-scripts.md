# Available Scripts

The `package.json` file includes a set of npm scripts to streamline common development tasks. These scripts help with building, testing, linting, and deploying the application. They can be executed from the root of the project using the `npm run <script-name>` command.

Below is a comprehensive reference for each available script.

### Core Development & Code Quality

These scripts are essential for the day-to-day development workflow, from compiling the code to ensuring its quality.

| Script | Description |
|---|---|
| `build` | Compiles the TypeScript source code from the `src` directory into JavaScript, outputting the result to the `dist` directory using esbuild. |
| `build:watch` | Runs the build process in watch mode. It automatically recompiles the code whenever a source file is changed. |
| `debug` | Executes the compiled CLI application directly using Node.js. This is useful for testing the built version locally. |
| `test` | Runs the entire test suite using Jest to verify the functionality of the application. |
| `coverage` | Executes the test suite and generates a code coverage report, showing how much of the codebase is covered by tests. |
| `lint` | Analyzes the TypeScript source code for stylistic issues and potential errors using ESLint. |
| `lint:fix` | Runs the linter and automatically fixes any issues that are autofixable. |
| `verify` | A convenience script that runs both the linter and the test suite sequentially. This is useful for a final check before committing code. |
| `clean` | Deletes the `dist` directory, removing all previously compiled files and build artifacts. |

### Deployment & Versioning

These scripts are used for deploying the application and managing its version number.

| Script | Description |
|---|---|
| `deploy` | Performs a local global installation. It builds the project, uninstalls any existing global version of `to-where-cli`, and then installs the current local version globally. This is ideal for end-to-end testing of the local build. |
| `deploy:remote` | Reinstalls the latest published version of `to-where-cli` from the npm registry. This is useful for switching from a local development version back to the official release. |
| `bump-version` | Increments the package version number in `package.json` using the `ver-bump` utility. |
| `show:version` | Displays the latest version number of the `to-where-cli` package that is currently published on npm. |

### Utilities

| Script | Description |
|---|---|
| `reinstall` | Deletes the `node_modules` directory and reinstalls all project dependencies using `pnpm`. This is helpful for resolving dependency-related issues. |
