import { logger } from "./../utils/logger";
import { SimpleWorker } from "../classes/simple-worker";
import { basename } from "path";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";

const addCommand = new Command();

addCommand
  .name("add")
  .description("Add an alias to your address")
  .argument("[alias]", "Give your address an alias")
  .option("-f, --force", "Overwrite existing alias", false)
  .action((point: string, options: ActionOptions) => {
    let dir = options?.args?.[0];

    if (!point) {
      dir = process.cwd();
      point = basename(dir);
    } else if (!dir) {
      dir = process.cwd();
    }

    logger.info(options);

    const force = <boolean>options.force;

    new SimpleWorker().add({
      alias: point,
      address: dir,
      force,
    });
  });

export { addCommand };
