import { basename } from "path";
import { createProgram } from "../../src";
import open from 'open';
import gitRemoteOriginUrl from "git-remote-origin-url";
import getRepoInfo, {GitRepoInfo} from 'git-repo-info'
import urlJoin  from 'url-join';

jest.mock('open')
const openMock = jest.mocked(open);


jest.mock('git-remote-origin-url');
const gitRemoteOriginUrlMock = jest.mocked(gitRemoteOriginUrl);

jest.mock('git-repo-info');
const getRepoInfoMock = jest.mocked(getRepoInfo);

describe(basename(__filename), () => {

  const githubAddress = 'https://github.com/skypesky/to-where-cli';
  const gitRepoInfo: GitRepoInfo = {
    branch: 'master',
    sha: "",
    abbreviatedSha: "",
    tag: "",
    lastTag: "",
    commitsSinceLastTag: 0,
    committer: "",
    committerDate: "",
    author: "skypesky",
    authorDate: "",
    commitMessage: "",
    root: "",
    commonGitDir: "",
    worktreeGitDir: ""
  }

  beforeEach(() => {
    openMock.mockReturnThis();
    gitRemoteOriginUrlMock.mockResolvedValue(githubAddress);
    getRepoInfoMock.mockReturnValue(gitRepoInfo);
  });
  
  afterEach(() => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    jest.restoreAllMocks();
  })

  it("should be work when call tw git open", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", 'open']);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, 'tree', gitRepoInfo.branch));
  });

  it("should be work when call tw git open -a", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", 'open', '-a']);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, 'actions'));
  });

  it("should be work when call tw git open -i", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", 'open', '-i']);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, 'issues'));
  });

  it("should be work when call tw git open -p", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", 'open', '-p']);

    expect(openMock).toBeCalledWith(urlJoin(githubAddress, 'pulls'));
  });

  it("should be work when call tw git open -p", async () => {
    const program = createProgram();

    await program.parseAsync(["ts-node", "index.ts", "git", 'open', '--author']);

    // FIXME: 多个options的选项值同时出现
    expect(openMock).toBeCalledWith(urlJoin(githubAddress));
  });
});
