import { Command, Option } from "commander";
import { open } from "../../classes";

const npmSearchCommand = new Command();

npmSearchCommand
  .name("search")
  .argument("[keyword]", "Search by keyword")
  .option('-v,--version', 'Search by version')
  .description("Search by keyword")
  .action(async (keyword: string, options: { version: boolean } ) => {

    let pageUrl: string = null;

    if(keyword && options.version) {
      pageUrl = `https://www.npmjs.com/package/${keyword}?activeTab=versions`;
    } else if(keyword) {
      pageUrl = `https://www.npmjs.com/search?q=${keyword}`;
    } else {
      pageUrl = `https://www.npmjs.com`;
    }

    await open(pageUrl);
  });

export { npmSearchCommand };
