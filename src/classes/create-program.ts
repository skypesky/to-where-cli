import { Command } from "commander";
import * as packageJson from "../../package.json";
import { simpleWorker } from ".";
import { addCommand } from "../cli/add";
import { cleanCommand } from "../cli/clean";
import { listCommand } from "../cli/list";
import { removeCommand } from "../cli/rm";

export function createProgram() {
  // @see: https://www.npmjs.com/package/commander
  const program = new Command();

  program
    .name("tw")
    .version(packageJson.version)
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

  return program;
}
