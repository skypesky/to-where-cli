#! /usr/bin/env node

import { program } from "commander";
import * as packageJson from "../../package.json";
import { SimpleWorker } from "../classes";
import { addCommand } from "./add";
import { cleanCommand } from "./clean";
import { listCommand } from "./list";
import { removeCommand } from "./rm";

// @see: https://www.npmjs.com/package/commander

program
  .name("td")
  .description("ABC")
  .version(packageJson.version)
  .argument("[point]", "point todo")
  .action(async (point: string) => {
    if (!point) {
      program.help();
    }

    await new SimpleWorker().cd(point);
  });

program.addCommand(addCommand);
program.addCommand(removeCommand);
program.addCommand(listCommand);
program.addCommand(cleanCommand);

program.parseAsync();
