import { simpleWorker } from '../classes/simple-worker';
import { Command } from 'commander';

export function listCommand() {
  const command = new Command();

  command
    .name('ls')
    .alias('list')
    .description('List existing aliases and addresses')
    .argument('[alias]', 'Give your address an alias')
    .action(async (alias?: string) => {
      await simpleWorker.list(alias);
    });

  return command;
}
