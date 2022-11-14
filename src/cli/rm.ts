import { SimpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const removeCommand = new Command();

removeCommand
  .name("rm")
  .description("Adds the current working directory to your warp points")
  .argument("<point>", "TODO")
  .action((point: string) => {
    new SimpleWorker().delete(point);
  });

export { removeCommand };
