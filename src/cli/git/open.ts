import { Command } from "commander";
import { ActionOptions } from "../../meta/actions-options";
import urlJoin from "url-join";
import getRepoInfo from "git-repo-info";
import { logger } from "../../utils/logger";
import { open } from "../../classes";
import { isBoolean } from "lodash";
import { getGitRemoteUrl } from "../../utils/git";
import exec from "shelljs.exec";

const gitOpenCommand = new Command();

gitOpenCommand
  .name("open")
  .description("Open github repo page, issues page, pr page, ...etc")
  .option("-a, --actions", "Open actions page", false)
  .option("--author", "Open author profile page", false)
  .option("-b, --branch [branch]", "Open branch page(default current branch)")
  .option("-c, --commit [hash]", "Open commit page")
  .option("--committer", "Open committer profile page", false)
  .option("-f, --file <filePath>", "Open specific file page")
  .option("--find", "Open the search file page", false)
  .option("--first-commit", "Open first commit page", false)
  .option("-i, --issue", "Open issues list page", false)
  .option("-m, --main", "Open main branch page", false)
  .option("-p, --pull-request", "Open pull request list page", false)
  .option(
    "--pull [branch]",
    "Open the page for creating a pull request, the branch defaults to the current branch",
    false
  )
  .option("-r, --release", "Open release page", false)
  .option("-s, --settings", "Open settings page", false)
  .option("--star", "Open star page", false)
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
    const pullRequest = <boolean>options.pullRequest;
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
      addresses.push(urlJoin(githubAddress, "actions"));
    }

    if (issue) {
      addresses.push(urlJoin(githubAddress, "issues"));
    }

    if (pullRequest) {
      addresses.push(urlJoin(githubAddress, "pulls"));
    }

    if (pull) {
      const info = getRepoInfo();
      const branchName: string = isBoolean(pull) ? info.branch : pull;
      addresses.push(urlJoin(githubAddress, "pull/new", branchName));
    }

    if (author) {
      const info = getRepoInfo();
      const [$author] = info.author.split(" ");
      addresses.push(urlJoin(new URL(githubAddress).origin, $author));
    }

    if (release) {
      addresses.push(urlJoin(githubAddress, "releases"));
    }

    if (branch) {
      const info = getRepoInfo();
      const branchName = isBoolean(branch) ? info.branch : branch;
      addresses.push(urlJoin(githubAddress, "tree", branchName));
    }

    if (commit) {
      const info = getRepoInfo();
      const $commit: string = isBoolean(commit) ? info.sha : commit;
      addresses.push(urlJoin(githubAddress, "commit", $commit));
    }

    if (committer) {
      const info = getRepoInfo();
      const [$committer] = info.author.split(" ");
      addresses.push(urlJoin(new URL(githubAddress).origin, $committer));
    }

    if (file) {
      const info = getRepoInfo();
      // FIXME: 需要默认跳转到主分支
      const branchName = info.branch ?? "";
      addresses.push(urlJoin(githubAddress, "tree", branchName, file));
    }

    if (find) {
      const info = getRepoInfo();
      // FIXME: 需要默认跳转到主分支
      const branchName = info.branch ?? "";
      addresses.push(urlJoin(githubAddress, "find", branchName));
    }

    if (firstCommit) {
      const info = exec("git rev-list --max-parents=0 head");
      const firstCommitHash = info.stdout.trim();
      addresses.push(urlJoin(githubAddress, "commit", firstCommitHash));
    }

    if (settings) {
      addresses.push(urlJoin(githubAddress, "settings"));
    }

    if (star) {
      addresses.push(urlJoin(githubAddress, "stargazers"));
    }

    if (main) {
      // 什么都不用做
      addresses.push(githubAddress);
    }

    if (!addresses.length) {
      const info = getRepoInfo();
      // FIXME: 需要默认跳转到主分支
      const branchName = info.branch ?? "";
      addresses.push(urlJoin(githubAddress, "tree", branchName));
    }

    for (const address of addresses) {
      await open(address);
    }
  });

export { gitOpenCommand };
