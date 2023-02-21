import { simpleWorker } from "../classes/simple-worker";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";

const lsCommand = new Command();

lsCommand
  .name("ls")
  .description("List existing aliases and addresses")
  .action(async (_str: string, options: ActionOptions) => {
    const [point] = options.args;

    await simpleWorker.list(point);
  });

export { lsCommand };
