import { simpleWorker } from '../classes/simple-worker';
import { Command } from 'commander';
import { ActionOptions } from '../meta/actions-options';

export function cleanCommand() {
  const command = new Command();

  command
    .name('clean')
    .description('Clear existing aliases')
    .option('-f, --force', 'force empty', false)
    .action(async (str, options: ActionOptions) => {
      const force = <boolean>options.opts().force;
      await simpleWorker.clean(force);
    });

  return command;
}
