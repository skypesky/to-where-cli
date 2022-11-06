import { SimpleWorker } from "../classes/simple-worker";
import { Command } from "commander";
import { logger } from "../utils/logger";

const listCommand = new Command();

listCommand
  .name("list")
  .description("Adds the current working directory to your warp points")
  .action(async (str, options) => {
    const [point] = options.args;

    await new SimpleWorker().list(point);
  });

export { listCommand };
