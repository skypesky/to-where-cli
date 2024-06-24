import { Command } from 'commander';
import { open } from '../../classes';

function npmCommand() {
  const command = new Command();

  command
    .name('npm')
    .description('Support using npm search,etc.Under continuous development...')
    .argument('[packageName]', 'Search by package name')
    .option('-c,--code', 'Open package code page')
    .option('-d,--dependencies', 'Open package dependencies page')
    .option('-v,--version', 'Open package versions page')
    .option('-r,--run-kit', 'Open run kit page')
    .action(
      async (
        packageName: string,
        options: {
          version: boolean;
          code: boolean;
          dependencies: boolean;
          runKit: boolean;
        }
      ) => {
        let pageUrl: string = null;

        if (packageName && options.version) {
          pageUrl = `https://www.npmjs.com/package/${packageName}?activeTab=versions`;
        } else if (packageName && options.code) {
          pageUrl = `https://www.npmjs.com/package/${packageName}?activeTab=code`;
        } else if (packageName && options.dependencies) {
          pageUrl = `https://www.npmjs.com/package/${packageName}?activeTab=dependencies`;
        } else if (packageName && options.runKit) {
          pageUrl = `https://npm.runkit.com/${packageName}`;
        } else if (packageName) {
          pageUrl = `https://www.npmjs.com/search?q=${packageName}`;
        } else {
          pageUrl = `https://www.npmjs.com`;
        }

        await open(pageUrl);
      }
    );

  return command;
}

export { npmCommand };
