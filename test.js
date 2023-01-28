/* eslint-disable @typescript-eslint/no-var-requires */
const { WorkSpaces } = require("./scripts/update-beta-package-version");
const { cwd } = require("process");
const { readFileSync } = require("fs-extra");
const dayjs = require("dayjs");
const { join } = require("path");

(async () => {
  try {
    const currentVersion = readFileSync(join(cwd(), "version"))
      .toString()
      .trim();
    const time = dayjs().format("YYYY-MM-DD-HH-MM-SSS");

    const newVersion = `${currentVersion}-beta-${time}`;
    const workspace = new WorkSpaces({
      rootDir: cwd(),
      workSpaces: ["core"],
      includeWorkspaceRoot: true,
    });
    await workspace.setVersion(newVersion);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
