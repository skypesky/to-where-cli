/* eslint-disable @typescript-eslint/no-var-requires */
const { WorkSpaces } = require("./libs/work-spaces");
const { cwd } = require("process");
const dayjs = require("dayjs");
const { join } = require("path");
const { readJSONSync } = require("fs-extra");

const currentVersion = readJSONSync(
  join(cwd(), "package.json")
).version.replace(/-.*/, "");
const time = dayjs().format("YYYY-MM-DD-HH-MM-SSS");

const newVersion = `${currentVersion}-beta-${time}`;
const workspace = new WorkSpaces({
  rootDir: cwd(),
  workSpaces: ["core"],
  includeWorkspaceRoot: true,
});
workspace.setVersion(newVersion);
