import { SimpleWorker } from "./../classes/simple-worker";
import { Command } from "commander";

const addCommand = new Command();

addCommand
  .name("add")
  .description("Adds the current working directory to your warp points")
  .option("-f, --force", "TODO", false)
  .action((str, options) => {
    let [point] = options.args;

    if (!point) {
      point = "test";
    }

    const path = process.cwd();
    const force = options.opts().force;

    new SimpleWorker().add({
      point,
      path,
      force,
    });
  });

export { addCommand };
