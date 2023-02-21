import { Command } from "commander";
import { open } from "../../classes";

const baiduSearchCommand = new Command();

baiduSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .description("Search by keyword")
  .action(async (keyword = "") => {
    const searchUrl = `https://www.baidu.com/s?wd=${keyword}`;

    await open(searchUrl);
  });

export { baiduSearchCommand };
