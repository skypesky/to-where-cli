import { simpleWorker } from '../classes/simple-worker';
import { Command } from 'commander';

const listCommand = new Command();

listCommand
  .name('ls')
  .alias('list')
  .description('List existing aliases and addresses')
  .argument('[alias]', 'Give your address an alias')
  .action(async (alias?: string) => {
    await simpleWorker.list(alias);
  });

export { listCommand };
