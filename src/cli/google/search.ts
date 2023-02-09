import { Command } from "commander";
import { open } from "../../classes";

const googleSearchCommand = new Command();

googleSearchCommand
  .name("search")
  .argument("<keyword>", "TODO")
  .description("TODO")
  .action(async (keyword: string) => {
    const searchUrl = `https://www.google.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { googleSearchCommand };
