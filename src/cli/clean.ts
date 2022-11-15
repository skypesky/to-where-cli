import { SimpleWorker } from "../classes/simple-worker";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";

const cleanCommand = new Command();

cleanCommand
  .name("clean")
  .description(
    "Remove points warping to nonexistent directories (will prompt unless --force is used)"
  )
  .option("-f, --force", "force", false)
  .option("-a, --all", "all", false)
  .action(async (str, options: ActionOptions) => {
    const force = <boolean>options.opts().force;
    const all = <boolean>options.opts().all;
    await new SimpleWorker().clean(force, all);
  });

export { cleanCommand };
