import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";
import gitRemoteOriginUrl from "git-remote-origin-url";
import open from "open";
const gitCommand = new Command();

gitCommand
  .name("git")
  .description("Open the repo, issue, pr address of github")
  .command("open")
  .description("Open github repo, issue, pr address")
  .option("-i, --issue", "Open issues list", false)
  .option("-p, --pull-request", "Open pull request list", false)
  .action(async (options: ActionOptions) => {
    const issue = <boolean>options.issue;
    const pullRequest = <boolean>options.pullRequest;
    let githubAddress: string = await gitRemoteOriginUrl();

    if (issue) {
      githubAddress = `${githubAddress}/issues`;
    } else if (pullRequest) {
      githubAddress = `${githubAddress}/pulls`;
    }

    await open(githubAddress);
  });

export { gitCommand };
