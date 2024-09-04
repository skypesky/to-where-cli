import { Command } from 'commander';
import type { ActionOptions } from '../../meta/actions-options';
import { getGitRemoteUrl } from '../../utils/git';
import { logger } from '../../utils/logger';
import { joinURL } from 'ufo';
import { isBoolean, isNumber } from 'lodash';
import getRepoInfo from 'git-repo-info';
import exec from 'shelljs.exec';
import { open } from '../../classes';

export function gitCommand() {
  const command = new Command();

  command
    .name('git')
    .description('Support to open project related issue list, pr list...')
    .option('-a, --actions', 'Open actions page', false)
    .option('--author', 'Open author profile page', false)
    .option('-b, --branch [branch]', 'Open branch page(default current branch)')
    .option('-c, --commit [hash]', 'Open commit page')
    .option('--committer', 'Open committer profile page', false)
    .option('-f, --file <filePath>', 'Open specific file page')
    .option('--find', 'Open the search file page', false)
    .option('--first-commit', 'Open first commit page', false)
    .option('-i, --issue', 'Open issues list page', false)
    .option('-m, --main', 'Open main branch page', false)
    .option(
      '-p, --pull-request [pullRequest]',
      'Open pull request list page',
      false
    )
    .option(
      '--pull [branch]',
      'Open the page for creating a pull request, the branch defaults to the current branch',
      false
    )
    .option('-r, --release', 'Open release page', false)
    .option('-s, --settings', 'Open settings page', false)
    .option('--star', 'Open star page', false)
    .action(async (options: ActionOptions) => {
      const actions = <boolean>options.actions;
      const author = <boolean>options.author;
      const branch = <string>options.branch;
      const commit = <string>options.commit;
      const committer = <boolean>options.committer;
      const file = <string>options.file;
      const find = <boolean>options.find;
      const firstCommit = <boolean>options.firstCommit;
      const issue = <boolean>options.issue;
      const pullRequest = <string>options.pullRequest;
      const pull = <string>options.pull;
      const release = <boolean>options.release;
      const main = <boolean>options.main;
      const settings = <boolean>options.settings;
      const star = <boolean>options.star;

      const addresses: string[] = [];
      const githubAddress: string = await getGitRemoteUrl();

      if (!githubAddress) {
        logger.error(`The current directory is not a valid git repository`);
        return;
      }

      if (actions) {
        addresses.push(joinURL(githubAddress, 'actions'));
      }

      if (issue) {
        addresses.push(joinURL(githubAddress, 'issues'));
      }

      if (pullRequest) {
        if (isNumber(pullRequest)) {
          addresses.push(joinURL(githubAddress, 'pull', pullRequest));
        } else {
          addresses.push(joinURL(githubAddress, 'pulls'));
        }
      }

      if (pull) {
        const info = getRepoInfo();
        const branchName: string = isBoolean(pull) ? info.branch : pull;
        addresses.push(joinURL(githubAddress, 'pull/new', branchName));
      }

      if (author) {
        const info = getRepoInfo();
        const [$author] = info.author.split(' ');
        addresses.push(joinURL(new URL(githubAddress).origin, $author));
      }

      if (release) {
        addresses.push(joinURL(githubAddress, 'releases'));
      }

      if (branch) {
        const info = getRepoInfo();
        const branchName = isBoolean(branch) ? info.branch : branch;
        addresses.push(joinURL(githubAddress, 'tree', branchName));
      }

      if (commit) {
        const info = getRepoInfo();
        const $commit: string = isBoolean(commit) ? info.sha : commit;
        addresses.push(joinURL(githubAddress, 'commit', $commit));
      }

      if (committer) {
        const info = getRepoInfo();
        const [$committer] = info.author.split(' ');
        addresses.push(joinURL(new URL(githubAddress).origin, $committer));
      }

      if (file) {
        const info = getRepoInfo();
        // FIXME: 需要默认跳转到主分支
        const branchName = info.branch ?? '';
        addresses.push(joinURL(githubAddress, 'tree', branchName, file));
      }

      if (find) {
        const info = getRepoInfo();
        // FIXME: 需要默认跳转到主分支
        const branchName = info.branch ?? '';
        addresses.push(joinURL(githubAddress, 'find', branchName));
      }

      if (firstCommit) {
        const info = exec('git rev-list --max-parents=0 head');
        const firstCommitHash = info.stdout.trim();
        addresses.push(joinURL(githubAddress, 'commit', firstCommitHash));
      }

      if (settings) {
        addresses.push(joinURL(githubAddress, 'settings'));
      }

      if (star) {
        addresses.push(joinURL(githubAddress, 'stargazers'));
      }

      if (main) {
        // 什么都不用做
        addresses.push(githubAddress);
      }

      if (!addresses.length) {
        const info = getRepoInfo();
        // FIXME: 需要默认跳转到主分支
        const branchName = info.branch ?? '';
        addresses.push(joinURL(githubAddress, 'tree', branchName));
      }

      for (const address of addresses) {
        await open(address);
      }
    });

  return command;
}
