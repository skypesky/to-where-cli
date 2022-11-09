import { SimpleWorker } from "../classes/simple-worker";
import { basename } from "path";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";

const addCommand = new Command();

addCommand
  .name("add")
  .description("Adds the current working directory to your warp points")
  .option("-f, --force", "TODO", false)
  .action((str: string, options: ActionOptions) => {
    let [point, dir] = options.args;

    if (!point) {
      dir = process.cwd();
      point = basename(dir);
    } else if (!dir) {
      dir = process.cwd();
    }

    const force = <boolean>options.opts().force;

    new SimpleWorker().add({
      point,
      dir: dir,
      force,
    });
  });

export { addCommand };
