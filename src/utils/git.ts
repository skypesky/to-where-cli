import gitRemoteOriginUrl from "git-remote-origin-url";
import hostedGitInfo from "hosted-git-info";

export async function getGitRemoteUrl() {
  try {
    const url = await gitRemoteOriginUrl();
    const gitInfo = hostedGitInfo.fromUrl(url);
    return gitInfo.browse();
  } catch (err) {
    return null;
  }
}
