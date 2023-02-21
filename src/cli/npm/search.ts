import { Command } from "commander";
import { open } from "../../classes";

const npmSearchCommand = new Command();

npmSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .description("Search by keyword")
  .action(async (keyword: string) => {
    const searchUrl = `https://www.npmjs.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { npmSearchCommand };
