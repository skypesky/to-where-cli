import { program } from 'commander';
import * as packageJson from '../../package.json';
import { logger } from '../utils/logger';

program.name("td").description('ABC').version(packageJson.version);

program.command("<point>")
    .description('Warps to the directory specified by the warp point')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command('add')
    .description('Adds the current working directory to your warp points')
    .argument('<point>', 'TODO')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command('rm')
    .description('Adds the current working directory to your warp points')
    .argument('<point>', 'TODO')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command('list')
    .description('Adds the current working directory to your warp points')
    .argument('<point>', 'TODO')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command('clean')
    .description('Adds the current working directory to your warp points')
    .option('-f', '--force', 'force')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.parse();
