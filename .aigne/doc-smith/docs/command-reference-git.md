# Git Command

The `tw git` command provides a powerful set of shortcuts to quickly access your project's repository pages directly from your command line. It automatically detects your remote repository URL and opens the relevant page—such as issues, pull requests, or specific branches—in your default web browser. 

Since `open` is the default subcommand, you can use `tw git` and `tw git open` interchangeably.

Running the command without any flags will open the repository page for your current branch.

```bash Basic Usage icon=lucide:terminal
# Opens the current branch in your browser
tw git
```

## Options

The following options can be used with the `tw git` command to navigate to specific pages. Most options can be combined.

| Option | Description |
|---|---|
| `-a`, `--actions` | Open the repository's Actions (CI/CD) page. |
| `--author` | Open the profile page of the last commit's author. |
| `-b`, `--branch [branch]` | Open the page for a specific branch. Defaults to the current branch if no name is provided. |
| `-c`, `--commit [hash]` | Open the page for a specific commit. Defaults to the latest commit (`HEAD`) if no hash is provided. |
| `--committer` | Open the profile page of the last commit's committer. |
| `-f`, `--file <filePath>` | Open the page for a specific file in the current branch. |
| `--find` | Open the file finder/search page for the current branch. |
| `--first-commit` | Open the page for the first commit in the repository's history. |
| `-i`, `--issue` | Open the repository's issues list page. |
| `-m`, `--main` | Open the main page of the repository. |
| `-p`, `--pull-request` | Open the repository's pull request list page. |
| `--pull [branch]` | Open the "New Pull Request" page. The compare branch defaults to your current branch or the one specified. |
| `-r`, `--release` | Open the repository's releases page. |
| `-s`, `--settings` | Open the repository's settings page. |
| `--star` | Open the repository's stargazers page. |

## Usage Examples

Here are some practical examples of how to use the `tw git` command.

### View Pull Requests

To quickly check the open pull requests for your project:

```bash View Pull Requests icon=lucide:git-pull-request
# Open the list of all pull requests
tw git -p
```

### Create a New Pull Request

After pushing a new feature branch, you can use this command to initiate a pull request.

```bash Create a Pull Request icon=lucide:git-pull-request-create
# Assuming you are on a branch called 'feat/new-feature'
# This opens the page to create a PR from 'feat/new-feature' into the default branch.
tw git --pull

# You can also specify the branch to create the PR from
tw git --pull feat/another-feature
```

### Inspect a Commit

Easily view the details of any commit without leaving your terminal.

```bash Inspect a Commit icon=lucide:git-commit
# Open the page for the latest commit on the current branch
tw git -c

# Open the page for a specific commit hash
tw git -c a1b2c3d4e5f6
```

### View a Specific File

To view the contents of a file or share a link to it:

```bash View a File icon=lucide:file-code
# Open the 'package.json' file in the browser for the current branch
tw git -f src/cli/git/open.ts
```

---

With these commands, you can streamline your workflow and reduce context switching between your terminal and browser. Next, you might want to explore how to perform web searches directly from your terminal with the [Search Commands](./command-reference-search.md).