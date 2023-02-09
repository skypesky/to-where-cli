import { Command } from "commander";
import { baiduSearchCommand } from "./search";

const baiduCommand = new Command();

baiduCommand.name("baidu").addCommand(baiduSearchCommand);

export { baiduCommand };
