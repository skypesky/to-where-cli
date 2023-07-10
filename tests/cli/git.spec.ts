import { basename } from "path";
import { createProgram } from "../../src";
import { open } from "../../src/classes/open";
import gitRemoteOriginUrl from "git-remote-origin-url";
import getRepoInfo, { GitRepoInfo } from "git-repo-info";
import urlJoin from "url-join";

jest.mock("../../src/classes/open");
const openMock = jest.mocked(open);

jest.mock("git-remote-origin-url");
const gitRemoteOriginUrlMock = jest.mocked(gitRemoteOriginUrl);

jest.mock("git-repo-info");
const getRepoInfoMock = jest.mocked(getRepoInfo);

describe(basename(__filename), () => {
  const errorSpy = jest.spyOn(console, "error").mockReturnThis();
  const githubAddress = "https://github.com/skypesky/to-where-cli";
  const gitRepoInfo: GitRepoInfo = {
    branch: "master",
    sha: "xxx",
    abbreviatedSha: "",
    tag: "",
    lastTag: "",
    commitsSinceLastTag: 0,
    committer: "skypesky",
    committerDate: "",
    author: "skypesky",
    authorDate: "",
    commitMessage: "",
    root: "",
    commonGitDir: "",
    worktreeGitDir: "",
  };

  beforeEach(() => {
    openMock.mockReturnThis();
    gitRemoteOriginUrlMock.mockResolvedValue(
      "https://github.com/skypesky/to-where-cli.git"
    );
    getRepoInfoMock.mockReturnValue(gitRepoInfo);
  });

  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("should be throw an error when current directory is not a valid git repository", async () => {
    gitRemoteOriginUrlMock.mockImplementation(() => {
      throw new Error("current directory is not a valid git repository");
    });

    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open"]);

    expect(errorSpy).toHaveBeenCalledWith(
      `The current directory is not a valid git repository`
    );
  });

  it("should be work when call tw git open", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open"]);

    expect(openMock).toBeCalledWith(
      urlJoin(githubAddress, "tree", gitRepoInfo.branch)
    );
  });

  it("should be work when call tw git open -a", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "-a"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "actions"));
  });

  it("should be work when call tw git open -i", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "-i"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "issues"));
  });

  it("should be work when call tw git open -p", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "-p"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "pulls"));
  });

  describe("#pull", () => {
    it("should be work when call tw git open --pull", async () => {
      const program = createProgram();

      await program.parseAsync([
        "ts-node",
        "index.ts",
        "git",
        "open",
        "--pull",
      ]);

      expect(openMock).toBeCalledWith(
        urlJoin(githubAddress, "pull/new", gitRepoInfo.branch)
      );
    });

    it("should be work when call tw git open --pull $branchName", async () => {
      const program = createProgram();

      await program.parseAsync([
        "ts-node",
        "index.ts",
        "git",
        "open",
        "--pull",
        "test-branch",
      ]);

      expect(openMock).toBeCalledWith(
        urlJoin(githubAddress, "pull/new", "test-branch")
      );
    });
  });

  it("should be work when call tw git open --author", async () => {
    const program = createProgram();

    await program.parseAsync([
      "ts-node",
      "index.ts",
      "git",
      "open",
      "--author",
    ]);

    expect(openMock).toBeCalledWith(
      urlJoin(new URL(githubAddress).origin, gitRepoInfo.author)
    );
  });

  it("should be work when call tw git open -r", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "-r"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "releases"));
  });

  describe("#branch", () => {
    it("should be work when call tw git open -b", async () => {
      const program = createProgram();

      await program.parseAsync(["ts-node", "index.ts", "git", "open", "-b"]);

      expect(openMock).toBeCalledWith(
        urlJoin(githubAddress, "tree", gitRepoInfo.branch)
      );
    });

    it("should be work when call tw git open -b hot-fix", async () => {
      const program = createProgram();

      await program.parseAsync([
        "ts-node",
        "index.ts",
        "git",
        "open",
        "-b",
        "hot-fix",
      ]);

      expect(openMock).toBeCalledWith(
        urlJoin(githubAddress, "tree", "hot-fix")
      );
    });
  });

  it("should be work when call tw git open -c d7d60372b8e401cbaef264f675174d3127dee931", async () => {
    const program = createProgram();

    const commitId = "d7d60372b8e401cbaef264f675174d3127dee931";

    await program.parseAsync([
      "ts-node",
      "index.ts",
      "git",
      "open",
      "-c",
      commitId,
    ]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "commit", commitId));
  });

  it("should be work when call tw git open --committer", async () => {
    const program = createProgram();

    await program.parseAsync([
      "ts-node",
      "index.ts",
      "git",
      "open",
      "--committer",
    ]);

    expect(openMock).toBeCalledWith(
      urlJoin(new URL(githubAddress).origin, gitRepoInfo.committer)
    );
  });

  it("should be work when call tw git open -f, --file README.md", async () => {
    const program = createProgram();

    await program.parseAsync([
      "ts-node",
      "index.ts",
      "git",
      "open",
      "-f",
      "README.md",
    ]);

    expect(openMock).toBeCalledWith(
      urlJoin(urlJoin(githubAddress, "tree", gitRepoInfo.branch, "README.md"))
    );
  });

  it("should be work when call tw git open --find", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "--find"]);

    expect(openMock).toBeCalledWith(
      urlJoin(urlJoin(githubAddress, "find", gitRepoInfo.branch))
    );
  });

  it("should be work when call tw git open -s", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "-s"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "settings"));
  });

  it("should be work when call tw git open --star", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "--star"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, "stargazers"));
  });

  it("should be work when call tw git open --main", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", "open", "--main"]);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress));
  });
});
