import { Command } from "commander";
import { logger } from "../utils/logger";

const listCommand = new Command();

listCommand.name('list')
  .description('Adds the current working directory to your warp points')
  .argument('[point]', 'TODO')
  .action((str, options) => {
      logger.log({ str, point: options.point });
  });

export {
  listCommand 
}
