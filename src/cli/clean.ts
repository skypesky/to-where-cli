import { SimpleWorker } from "../classes/simple-worker";
import { Command } from "commander";

const cleanCommand = new Command();

cleanCommand
  .name("clean")
  .description(
    "Remove points warping to nonexistent directories (will prompt unless --force is used)"
  )
  .option("-f, --force", "force", false)
  .option("-a, --all", "all", false)
  .action(async (str, options) => {
    const force = options.opts().force;
    const all = options.opts().all;
    await new SimpleWorker().clean(force, all);
  });

export { cleanCommand };
