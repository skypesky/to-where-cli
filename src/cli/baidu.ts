import { Command } from "commander";
import { open } from "../classes";
import { ActionOptions } from "../meta/actions-options";

const baiduCommand = new Command();

baiduCommand
  .name("baidu")
  .command("search")
  .argument("<keyword>", "search npm packages")
  .description("TODO")
  .action(async (keyword: string, options: ActionOptions) => {
    console.log({ keyword, options });

    const searchUrl = `https://www.baidu.com/s?wd=${keyword}`;

    await open(searchUrl);
  });

export { baiduCommand };
