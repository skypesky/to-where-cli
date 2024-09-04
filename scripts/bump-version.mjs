import { execSync } from 'child_process';
import { findWorkspacePackages } from '@pnpm/workspace.find-packages';
import { $, chalk, fs } from 'zx';
import { join, relative } from 'path';
import prompts from 'prompts';

const rootDir = join(__dirname, '..');
const packages = (await findWorkspacePackages(rootDir)).slice(1);
const packageOpts = packages.map((pkg) => ({ title: pkg.manifest.name, value: pkg }));

const { picked } = await prompts({
  type: 'multiselect',
  name: 'picked',
  message: 'Pick packages to bump version: ',
  choices: packageOpts,
});

if (picked) {
  for (const pkg of picked) await updatePackageVersion(pkg);
}

async function getBumpPrepareData() {
  let gitLog;
  let currentDate;

  const getGitLog = async () => {
    try {
      const gitRes = await $`git log --pretty=format:"- %s" "master"...HEAD`;
      gitLog = gitRes.stdout.trim();
      return gitLog;
    } catch {
      console.error(chalk.redBright('Could not get git log, please write changelog manually.'));
      return '';
    }
  };

  const getCurrentDate = () => {
    const now = new Date();
    currentDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
    return currentDate;
  };

  return {
    gitLog: gitLog ?? (await getGitLog()),
    currentDate: currentDate ?? getCurrentDate(),
  };
}

async function updatePackageVersion(pkg) {
  const relativePath = relative(rootDir, pkg.rootDir);
  const packageJsonPath = join(relativePath, 'package.json');
  const versionPath = join(relativePath, 'version');
  const blockletYmlPath = join(relativePath, 'blocklet.yml');
  const changelogPath = join(relativePath, 'CHANGELOG.md');

  console.log(chalk.greenBright(`[info]: start to bump version for: ${pkg.manifest.name}`));

  // prepare bump & bump version
  async function bump() {
    const { gitLog, currentDate } = await getBumpPrepareData();
    const { changelog = '' } = await prompts({
      type: 'text',
      name: 'changelog',
      message: 'Please write changelog:',
      initial: '\n' + gitLog,
    });
    execSync(`bumpp --no-tag --no-commit --no-push ${packageJsonPath}`, { stdio: 'inherit' });
    return { newChangelog: changelog.trim(), currentDate };
  }

  try {
    const { newChangelog, currentDate } = await bump();
    // update version file
    const { version } = await fs.readJSON(packageJsonPath);
    await fs.writeFileSync(versionPath, version);

    // update blocklet.yml
    if (fs.existsSync(blockletYmlPath)) {
      await $`cd ${relativePath} && blocklet version ${version}`;
    }

    const title = `## ${version} (${currentDate})`;
    await fs.ensureFile(changelogPath);
    const oldChangelog = await fs.readFile(changelogPath, 'utf8');
    const changelog = [title, newChangelog, oldChangelog].filter((item) => !!item).join('\n\n');
    await fs.writeFile(changelogPath, changelog);
  } catch (error) {
    console.error(chalk.redBright(`[error]: failed to bump version for: ${pkg.manifest.name}`));
  }
}
