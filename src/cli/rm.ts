import { SimpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const removeCommand = new Command();

removeCommand
  .name("rm")
  .description("Remove an alias from your address")
  .argument("<point>", "TODO")
  .action((alias: string) => {
    new SimpleWorker().delete(alias);
  });

export { removeCommand };
