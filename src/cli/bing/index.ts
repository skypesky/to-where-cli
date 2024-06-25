import { Command } from 'commander';
import { open } from '../../classes';

const bingCommand = new Command();

bingCommand
  .name('bing')
  .description('Support using bing search,etc.Under continuous development...')
  .argument('[keyword]', 'Search by keyword')
  .action(async (keyword = '') => {
    const searchUrl = `https://www.bing.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { bingCommand };
