import { Command } from 'commander';
import { open } from '../../classes';

function npmSearchCommand(): Command {
  const command = new Command();

  command
    .name('search')
    .argument('[keyword]', 'Search by keyword')
    .option('-c,--code', 'Open package code page')
    .option('-d,--dependencies', 'Open package dependencies page')
    .option('-v,--version', 'Open package versions page')
    .option('-r,--run-kit', 'Open run kit page')
    .description('Search by keyword')
    .action(
      async (
        keyword: string,
        options: {
          version: boolean;
          code: boolean;
          dependencies: boolean;
          runKit: boolean;
        }
      ) => {
        let pageUrl: string = null;

        console.log(options);

        if (keyword && options.version) {
          pageUrl = `https://www.npmjs.com/package/${keyword}?activeTab=versions`;
        } else if (keyword && options.code) {
          pageUrl = `https://www.npmjs.com/package/${keyword}?activeTab=code`;
        } else if (keyword && options.dependencies) {
          pageUrl = `https://www.npmjs.com/package/${keyword}?activeTab=dependencies`;
        } else if (keyword && options.runKit) {
          pageUrl = `https://npm.runkit.com/${keyword}`;
        } else if (keyword) {
          pageUrl = `https://www.npmjs.com/search?q=${keyword}`;
        } else {
          pageUrl = `https://www.npmjs.com`;
        }

        await open(pageUrl);
      }
    );

  return command;
}

export { npmSearchCommand };
