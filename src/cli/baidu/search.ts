import { Command } from "commander";
import { open } from "../../classes";

const baiduSearchCommand = new Command();

baiduSearchCommand
  .name("search")
  .argument("<keyword>", "search npm packages")
  .description("TODO")
  .action(async (keyword: string) => {
    const searchUrl = `https://www.baidu.com/s?wd=${keyword}`;

    await open(searchUrl);
  });

export { baiduSearchCommand };
