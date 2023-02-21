import { simpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const removeCommand = new Command();

removeCommand
  .name("rm")
  .description("Remove an alias from your address")
  .argument("<point>", "Enter the point to be deleted")
  .action((alias: string) => {
    simpleWorker.delete(alias);
  });

export { removeCommand };
