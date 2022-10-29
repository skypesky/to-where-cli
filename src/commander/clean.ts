import { Command } from "commander";
import { logger } from "../utils/logger";

const cleanCommand = new Command();

cleanCommand.name('clean')
  .description('Remove points warping to nonexistent directories (will prompt unless --force is used)')
    .option('-f', '--force', 'force')
    .action((str, options) => {
        logger.log({ str, force: options.force });
    });

export { cleanCommand };