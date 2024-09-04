import { simpleWorker } from '../classes/simple-worker';
import { basename } from 'path';
import { Command } from 'commander';
import { ActionOptions } from '../meta/actions-options';

export function addCommand() {
  const command = new Command();

  command
    .name('add')
    .description('Add an alias to your address')
    .argument('[alias]', 'Give your address an alias')
    .argument('[address]', 'your address')
    .option('-f, --force', 'Overwrite existing alias', false)
    .action((point: string, address: string, options: ActionOptions) => {
      if (!point) {
        address = process.cwd();
        point = basename(address);
      } else if (!address) {
        address = process.cwd();
      }

      const force = <boolean>options.force;

      simpleWorker.add({
        alias: point,
        address: address,
        force,
      });
    });

  return command;
}
