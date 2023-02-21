import { Command } from "commander";
import { npmSearchCommand } from "./search";

const npmCommand = new Command();

npmCommand
  .name("npm")
  .description("Support using npm search,etc.Under continuous development...")
  .argument("[keyword]", "Search by keyword")
  .addCommand(npmSearchCommand, { isDefault: true, hidden: true });

export { npmCommand };
