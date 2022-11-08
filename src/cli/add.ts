import {SimpleWorker} from '../classes/simple-worker';
import {basename} from 'path';
import {Command} from 'commander';
import {ActionOptions} from '../meta/actions-options';

const addCommand = new Command();

addCommand
    .name('add')
    .description('Adds the current working directory to your warp points')
    .option('-f, --force', 'TODO', false)
    .action((str: string, options: ActionOptions) => {
      let [point, path] = options.args;

      if (!point) {
        path = process.cwd();
        point = basename(path);
      } else if (!path) {
        path = process.cwd();
      }

      const force = options.opts().force;

      new SimpleWorker().add({
        point,
        path,
        force,
      });
    });

export {addCommand};
