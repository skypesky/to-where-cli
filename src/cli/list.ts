import { SimpleWorker } from "../classes/simple-worker";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";

const listCommand = new Command();

listCommand
  .name("list")
  .description("list existing aliases and addresses")
  .action(async (str: string, options: ActionOptions) => {
    const [point] = options.args;

    await new SimpleWorker().list(point);
  });

export { listCommand };
