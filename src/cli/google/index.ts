import { Command } from "commander";
import { googleSearchCommand } from "./search";

const googleCommand = new Command();

googleCommand.name("google").addCommand(googleSearchCommand);

export { googleCommand };
