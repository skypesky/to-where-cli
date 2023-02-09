import { Command } from "commander";
import { open } from "../classes";
import { ActionOptions } from "../meta/actions-options";

const bingCommand = new Command();

bingCommand
  .name("bing")
  .command("search")
  .argument("[keyword]", "search npm packages", "")
  .description("TODO")
  .action(async (keyword: string, options: ActionOptions) => {
    console.log({ keyword, options });

    const searchUrl = `https://www.bing.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { bingCommand };
