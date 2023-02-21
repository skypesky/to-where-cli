import { Command } from "commander";
import { githubSearchCommand } from "./search";

const githubCommand = new Command();

githubCommand
  .name("github")
  .description(
    "Support using github search,etc.Under continuous development..."
  )
  .argument("[keyword]", "Search by keyword")
  .addCommand(githubSearchCommand, { isDefault: true, hidden: true });

export { githubCommand };
