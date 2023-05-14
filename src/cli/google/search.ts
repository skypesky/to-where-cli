import { Command } from "commander";
import { open } from "../../classes";

const googleSearchCommand = new Command();

googleSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .description("Search by keyword")
  .action(async (keyword = "") => {
    const searchUrl = `https://www.google.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { googleSearchCommand };
