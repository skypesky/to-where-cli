import { Command } from "commander";
import { googleSearchCommand } from "./search";

const googleCommand = new Command();

googleCommand
  .name("google")
  .description(
    "Support using google search,etc.Under continuous development..."
  )
  .argument("[keyword]", "Search by keyword")
  .addCommand(googleSearchCommand, { isDefault: true, hidden: true });

export { googleCommand };
