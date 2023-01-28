/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { existsSync, readdirSync } = require("fs-extra");
const { readJsonSync } = require("fs-extra");
const { outputFileSync } = require("fs-extra");
const { isArray } = require("lodash");

class WorkSpaces {
  /**
   * @type {string}
   */
  rootDir;

  /**
   * @type {string[]}
   * @example ['core', 'services', 'packages']
   */
  workSpaces;

  includeWorkspaceRoot;

  #packageJson = "package.json";

  constructor({ rootDir, workSpaces, includeWorkspaceRoot }) {
    this.rootDir = rootDir;
    this.workSpaces = workSpaces;
    this.includeWorkspaceRoot = includeWorkspaceRoot;
  }

  async setVersion(version) {
    return this.#setVersion(version);
  }

  async #setVersion(version) {
    const packageJsonPaths = await this.#getPackageJsonPaths();

    await Promise.all(
      packageJsonPaths.map((packageJsonPath) =>
        this.#setPackageVersion(packageJsonPath, version)
      )
    );
  }

  /**
   *
   * @param {string} packageJsonPath
   * @param {string} version
   * @returns {Promise<void>}
   */
  async #setPackageVersion(packageJsonPath, version) {
    const packageJson = readJsonSync(packageJsonPath);
    packageJson.version = version;
    outputFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  }

  /**
   *
   * @returns {Promise<string[]>}
   */
  async #getPackageJsonPaths() {
    const packageJsonPaths = [];

    if (
      this.includeWorkspaceRoot &&
      existsSync(join(this.rootDir, this.#packageJson))
    ) {
      packageJsonPaths.push(join(this.rootDir, this.#packageJson));
    }

    if (!isArray(this.workSpaces)) {
      return packageJsonPaths;
    }

    for (const workspace of this.workSpaces) {
      if (!existsSync(join(this.rootDir, workspace))) {
        throw new Error(`workspace(${workspace}) not found`);
      }

      const files = readdirSync(workspace, { withFileTypes: true });

      for (const file of files) {
        if (
          file.isDirectory() &&
          existsSync(
            join(this.rootDir, workspace, file.name, this.#packageJson)
          )
        ) {
          packageJsonPaths.push(
            join(this.rootDir, workspace, file.name, this.#packageJson)
          );
        }
      }
    }

    return packageJsonPaths;
  }
}

module.exports = {
  WorkSpaces,
};
