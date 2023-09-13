import { Command } from "commander";
import { npmSearchCommand } from "./search";

function npmCommand() {
  const command = new Command();

  command
    .name("npm")
    .description("Support using npm search,etc.Under continuous development...")
    .argument("[keyword]", "Search by keyword")
    .addCommand(npmSearchCommand(), { isDefault: true, hidden: true });

  return command;
}



export { npmCommand };
