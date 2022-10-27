import { program } from 'commander';
import * as packageJson from '../../package.json';
import { logger } from '../utils/logger';

program.name("td").description('ABC').version(packageJson.version);

program.command("<point>")
    .description('Warps to the directory specified by the warp point')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command("<point> <path>")
    .description('Warps to the directory specified by the warp point with path appended')
    .action((str, options) => {
        logger.log({ str, options });
    });

program.command('add')
    .description('Adds the current working directory to your warp points')
    .argument('<point>', 'TODO')
    .action((str, options) => {
        logger.log({ str, options })

    });

program.parse();
