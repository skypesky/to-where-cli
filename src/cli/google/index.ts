import { Command } from 'commander';
import { open } from '../../classes';

const googleCommand = new Command();

googleCommand
  .name('google')
  .description(
    'Support using google search,etc.Under continuous development...'
  )
  .argument('[keyword]', 'Search by keyword')
  .action(async (keyword = '') => {
    const searchUrl = `https://www.google.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { googleCommand };
