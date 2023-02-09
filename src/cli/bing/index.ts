import { Command } from "commander";
import { bingSearchCommand } from "./search";

const bingCommand = new Command();

bingCommand.name("bing").addCommand(bingSearchCommand);

export { bingCommand };
