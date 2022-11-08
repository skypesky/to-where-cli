import {Command} from 'commander';
import {logger} from '../utils/logger';

const removeCommand = new Command();

removeCommand.name('rm')
    .description('Adds the current working directory to your warp points')
    .argument('<point>', 'TODO')
    .action((str, options) => {
      logger.log({str, options});
    });

export {
  removeCommand,
};
