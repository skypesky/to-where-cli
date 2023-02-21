import { Command } from "commander";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../../package.json");
import { simpleWorker } from ".";
import { addCommand } from "../cli/add";
import { cleanCommand } from "../cli/clean";
import { listCommand } from "../cli/list";
import { removeCommand } from "../cli/rm";
import { gitCommand } from "../cli/git";
import { npmCommand } from "../cli/npm";
import { googleCommand } from "../cli/google";
import { baiduCommand } from "../cli/baidu";
import { bingCommand } from "../cli/bing";
import { githubCommand } from "../cli/github";

export function createProgram() {
  // @see: https://www.npmjs.com/package/commander
  const program = new Command();

  program
    .name("tw")
    .version(version)
    .argument("[alias]", "Give your address an alias")
    .action(async (alias: string) => {
      if (alias) {
        await simpleWorker.open(alias);
        return process.exit(0);
      }

      program.help();
    });

  program.addCommand(addCommand);
  program.addCommand(removeCommand);
  program.addCommand(listCommand);
  program.addCommand(cleanCommand);
  program.addCommand(gitCommand);
  program.addCommand(npmCommand);
  program.addCommand(googleCommand);
  program.addCommand(baiduCommand);
  program.addCommand(bingCommand);
  program.addCommand(githubCommand);

  return program;
}
