import { Command } from "commander";
import { bingSearchCommand } from "./search";

const bingCommand = new Command();

bingCommand
  .name("bing")
  .description("Support using bing search,etc.Under continuous development...")
  .argument("[keyword]", "Search by keyword")
  .addCommand(bingSearchCommand, { isDefault: true, hidden: true });

export { bingCommand };
