import gitRemoteOriginUrl from "git-remote-origin-url";
import hostedGitInfo from "hosted-git-info";

/**
 * @description
 * @export
 * @return {*}
 * @example https://github.com/skypesky/to-where-cli
 */
export async function getGitRemoteUrl() {
  try {
    const url = await gitRemoteOriginUrl();
    const gitInfo = hostedGitInfo.fromUrl(url);
    return gitInfo.browse();
  } catch (err) {
    return null;
  }
}
