import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";
import gitRemoteOriginUrl from "git-remote-origin-url";
import open from "open";
import urlJoin from "url-join";
import getRepoInfo from "git-repo-info";
import { logger } from "../utils/logger";

async function getGitRemoteOriginUrl() {
  try {
    const url = await gitRemoteOriginUrl();
    return url.replace(/.git$/, "");
  } catch (err) {
    return null;
  }
}

const gitCommand = new Command();

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
    const actions = <boolean>options.actions;
    const author = <boolean>options.author;
    const issue = <boolean>options.issue;
    const pullRequest = <boolean>options.pullRequest;
    const release = <boolean>options.release;
    const sha = <boolean>options.sha;
    const committer = <boolean>options.committer;
    const main = <boolean>options.main;
    const settings = <boolean>options.settings;

    const addresses: string[] = [];
    const githubAddress: string = await getGitRemoteOriginUrl();

    if (!githubAddress) {
      logger.error(`The current directory is not a valid git repository`);
      return;
    }

    if (actions) {
      addresses.push(urlJoin(githubAddress, "actions"));
    }
    if (issue) {
      addresses.push(urlJoin(githubAddress, "issues"));
    }
    if (pullRequest) {
      addresses.push(urlJoin(githubAddress, "pulls"));
    }
    if (author) {
      const info = getRepoInfo();
      const [$author] = info.author.split(" ");
      addresses.push(urlJoin(new URL(githubAddress).origin, $author));
    }
    if (release) {
      addresses.push(urlJoin(githubAddress, "releases"));
    }
    if (committer) {
      const info = getRepoInfo();
      const [$committer] = info.author.split(" ");
      addresses.push(urlJoin(new URL(githubAddress).origin, $committer));
    }
    if (settings) {
      addresses.push(urlJoin(githubAddress, "settings"));
    }
    if (sha) {
      const info = getRepoInfo();
      addresses.push(urlJoin(githubAddress, "commit", info.sha));
    }
    if (main) {
      // 什么都不用做
      addresses.push(githubAddress);
    }

    if (!addresses.length) {
      const info = getRepoInfo();
      const branchName = info.branch;
      addresses.push(urlJoin(githubAddress, "tree", branchName));
    }

    for (const address of addresses) {
      await open(address);
    }
  });

export { gitCommand };
