import { Command } from 'commander';
import { open } from '../../classes';

const githubCommand = new Command();

githubCommand
  .name('github')
  .description(
    'Support using github search,etc.Under continuous development...'
  )
  .argument('[keyword]', 'Search by keyword')
  .action(async (keyword = '') => {
    const searchUrl = `https://github.com/search?q=${keyword}`;

    await open(searchUrl);
  });

export { githubCommand };
