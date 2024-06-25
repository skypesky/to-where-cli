import { Command } from 'commander';
import { open } from '../../classes';

const baiduCommand = new Command();

baiduCommand
  .name('baidu')
  .description('Support using baidu search,etc.Under continuous development...')
  .argument('[keyword]', 'Search by keyword')
  .action(async (keyword = '') => {
    const searchUrl = `https://www.baidu.com/s?wd=${keyword}`;

    await open(searchUrl);
  });

export { baiduCommand };
