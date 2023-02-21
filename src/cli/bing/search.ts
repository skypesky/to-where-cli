import { Command } from "commander";
import { open } from "../../classes";

const bingSearchCommand = new Command();

bingSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .description("Search by keyword")
  .action(async (keyword: string) => {
    const searchUrl = `https://www.bing.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { bingSearchCommand };
