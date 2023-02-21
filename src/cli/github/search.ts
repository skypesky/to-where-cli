import { Command } from "commander";
import { open } from "../../classes";

const githubSearchCommand = new Command();

githubSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .description("Search by keyword")
  .action(async (keyword = "") => {
    const searchUrl = `https://github.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { githubSearchCommand };
