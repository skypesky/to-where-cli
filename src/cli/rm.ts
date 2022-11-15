import { SimpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const removeCommand = new Command();

removeCommand
  .name("rm")
  .description("Adds the current working directory to your warp points")
  .argument("<point>", "TODO")
  .action((alias: string) => {
    new SimpleWorker().delete(alias);
  });

export { removeCommand };
