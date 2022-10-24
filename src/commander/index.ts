import { program } from 'commander';
import * as packageJson from '../../package.json';

program.name("td").description('ABC').version(packageJson.version);

program
    .option('--first')
    .option('-s, --separator <char>');

program.parse();

const options = program.opts();
const limit = options.first ? 1 : undefined;
console.log(program.args[0].split(options.separator, limit));