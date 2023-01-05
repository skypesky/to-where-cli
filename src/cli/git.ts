import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";
import gitRemoteOriginUrl from "git-remote-origin-url";
import open from "open";
const gitCommand = new Command();
import urlJoin from 'url-join';
import getRepoInfo from 'git-repo-info'


gitCommand
  .name("git")
  .command("open")
  .description("Open github repo page, issues page, pr page, ...etc")
  .option("-a, --actions", "Open actions page", false)
  .option("--author", "Open author profile page", false)
  .option("-c, --committer", "Open committer profile page", false)
  .option("-i, --issue", "Open issues list page", false)
  .option("-m, --main", "Open main branch page", false)
  .option("-p, --pull-request", "Open pull request list page", false)
  .option("-r, --release", "Open release page", false)
  .option("-s, --settings", "Open settings page", false)
  .option("--sha", "Open current sha page", false)
  .action(async (options: ActionOptions) => {
    const actions =  <boolean>options.actions;
    const author =  <boolean>options.author;
    const issue = <boolean>options.issue;
    const pullRequest = <boolean>options.pullRequest;
    const release =  <boolean>options.release;
    const sha =  <boolean>options.sha;
    const committer =  <boolean>options.committer;
    const main =  <boolean>options.main;
    const settings =  <boolean>options.settings;

    let githubAddress: string = await gitRemoteOriginUrl();

    if(actions) {
      githubAddress = urlJoin(githubAddress, 'actions');
    } else if (issue) {
      githubAddress = urlJoin(githubAddress, 'issues');
    } else if (pullRequest) {
      githubAddress = urlJoin(githubAddress, 'pulls');
    } else if(author) {
      const info = getRepoInfo();
      const [$author] = info.author.split(' ');
      githubAddress = urlJoin(new URL(githubAddress).origin, $author);
    } else if(release) {
      githubAddress = urlJoin(githubAddress, 'releases');
    }  else if(committer) {
      const info = getRepoInfo();
      const [$committer] = info.author.split(' ');
      githubAddress = urlJoin(new URL(githubAddress).origin, $committer);
    } else if(main) {
      // 什么都不用做
    } else if(settings) {
      githubAddress = urlJoin(githubAddress, 'settings');
    } else if(sha) {
      const info = getRepoInfo();
      githubAddress = urlJoin(githubAddress, 'commit', info.sha);
    } else {
      const info = getRepoInfo();
      const branchName = info.branch;
      githubAddress = urlJoin(githubAddress, 'tree', branchName);
    }

    await open(githubAddress);
  });

export { gitCommand };
