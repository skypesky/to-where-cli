import { Command } from 'commander';
import { open } from '../../classes';

const googleSearchCommand = new Command();

googleSearchCommand
  .name('search')
  .description('Search by keyword')
  .argument('[keyword]', 'Search by keyword')
  .action(async (keyword = '') => {
    const searchUrl = `https://www.google.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { googleSearchCommand };
