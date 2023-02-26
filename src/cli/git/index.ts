import { Command } from "commander";
import { gitOpenCommand } from "./open";

const gitCommand = new Command();

gitCommand
  .name("git")
  .description("Support to open project related issue list, pr list...")
  .addCommand(gitOpenCommand, { isDefault: true });

export { gitCommand };
