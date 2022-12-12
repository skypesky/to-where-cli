import { simpleWorker } from "../classes/simple-worker";
import { Command } from "commander";
import { ActionOptions } from "../meta/actions-options";
import gitRemoteOriginUrl from "git-remote-origin-url";
import { pull } from "lodash";

const gitCommand = new Command();

gitCommand
  .name("git")
  .command("open")
  .description("Open github repo, issue, pr address")
  .argument("[alias]", "Give your address an alias")
  .argument("[address]", "your address")
  .option("-i, --issues", "Open issues list", false)
  .option("-p, --pull-request", "Open pull request list", false)
  .action(async (point: string, address: string, options: ActionOptions) => {
    const issue = <boolean>options.issue;
    const pullRequest = <boolean>options.pullRequest;
    let githubAddress: string = await gitRemoteOriginUrl();

    if (issue) {
      githubAddress = `${address}/issues`;
    } else if (pullRequest) {
      githubAddress = `${address}/pulls`;
    }

    open(githubAddress);
  });

export { gitCommand };
