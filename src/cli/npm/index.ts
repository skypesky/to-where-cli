import { Command } from "commander";
import { npmSearchCommand } from "./search";

const npmCommand = new Command();

npmCommand.name("npm").addCommand(npmSearchCommand);

export { npmCommand };
