import { Command } from "commander";
import { baiduSearchCommand } from "./search";

const baiduCommand = new Command();

baiduCommand
  .name("baidu")
  .description("Support using baidu search,etc.Under continuous development...")
  .argument("[keyword]", "Search by keyword")
  .addCommand(baiduSearchCommand, { isDefault: true, hidden: true });

export { baiduCommand };
