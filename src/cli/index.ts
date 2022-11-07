#! /usr/bin/env node

import { program } from "commander";
import * as packageJson from "../../package.json";
import { logger } from "../utils/logger";
import { addCommand } from "./add";
import { cleanCommand } from "./clean";
import { listCommand } from "./list";
import { removeCommand } from "./rm";

// @see: https://www.npmjs.com/package/commander

program.name("td").description("ABC").version(packageJson.version);

program
  .command("<point>")
  .description("Warps to the directory specified by the warp point")
  .action((str, options) => {
    logger.log({ str, options });
  });

program.addCommand(addCommand);
program.addCommand(removeCommand);
program.addCommand(listCommand);
program.addCommand(cleanCommand);

program.parseAsync();
