import { SimpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const cleanCommand = new Command();

cleanCommand
  .name("clean")
  .description(
    "Remove points warping to nonexistent directories (will prompt unless --force is used)"
  )
  .option("-f, --force", "force", false)
  .action(async (str, options) => {
    await new SimpleWorker().clean(options.opts().force);
  });

export { cleanCommand };
