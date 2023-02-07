import gitRemoteOriginUrl from "git-remote-origin-url";
import { basename } from "path";
import { getGitRemoteUrl } from "../../src/utils/git";

jest.mock("git-remote-origin-url");
const gitRemoteOriginUrlMock = jest.mocked(gitRemoteOriginUrl);

describe(basename(__filename), () => {
  const httpsUrl = "https://github.com/skypesky/to-where-cli.git";
  const sshUrl = "https://github.com/skypesky/to-where-cli.git";
  const targetUrl = "https://github.com/skypesky/to-where-cli";

  it("should work with https-url", async () => {
    gitRemoteOriginUrlMock.mockResolvedValue(httpsUrl);
    const url = await getGitRemoteUrl();
    expect(url).toEqual(targetUrl);
  });

  it("should work with ssh-url", async () => {
    gitRemoteOriginUrlMock.mockResolvedValue(sshUrl);
    const url = await getGitRemoteUrl();
    expect(url).toEqual(targetUrl);
  });
});
