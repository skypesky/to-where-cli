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
  .version(packageJson.version)
  .argument("[alias]", "Give your address an alias")
  .action(async (alias: string) => {
    if (!alias) {
      program.help();
    }

    await new SimpleWorker().open(alias);
  });

program.addCommand(addCommand);
program.addCommand(removeCommand);
program.addCommand(listCommand);
program.addCommand(cleanCommand);

program.parseAsync();
