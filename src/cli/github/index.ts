import { Command } from 'commander';
import { open } from '../../classes';

export function githubCommand() {
  const command = new Command();

  command
    .name('github')
    .description(
      'Support using github search,etc.Under continuous development...'
    )
    .argument('[keyword]', 'Search by keyword')
    .option('-o,--org [org]', 'Open run kit page')
    .action(async (keyword = '', options: { org: string }) => {
      let url = '';

      if (keyword && options.org) {
        url = `https://github.com/search?q=org:${options.org}+${keyword}`;
      } else if (keyword) {
        url = `https://github.com/search?q=${keyword}`;
      } else if (options.org) {
        url = `https://github.com/${options.org}`;
      } else {
        url = `https://github.com/search?q=${keyword}`;
      }

      await open(url);
    });

  return command;
}
