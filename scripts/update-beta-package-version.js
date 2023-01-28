/* eslint-disable @typescript-eslint/no-var-requires */
const { WorkSpaces } = require("./libs/work-spaces");
const { cwd } = require("process");
const utc = require("dayjs/plugin/utc");
const dayjs = require("dayjs");
const { join } = require("path");
const { readJSONSync } = require("fs-extra");
dayjs.extend(utc);

const currentVersion = readJSONSync(
  join(cwd(), "package.json")
).version.replace(/-.*/, "");
const time = dayjs().utcOffset(8).format("YYYY-MM-DD-HH-mm-SSS");

const newVersion = `${currentVersion}-beta-${time}`;
const workspace = new WorkSpaces({
  rootDir: cwd(),
  includeWorkspaceRoot: true,
});
workspace.setVersion(newVersion);
