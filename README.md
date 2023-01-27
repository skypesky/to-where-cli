# to-where-cli

> Currently only supports [macOS](https://en.wikipedia.org/wiki/MacOS), [Windows](https://en.wikipedia.org/wiki/Windows)

Give your URL and folder an alias, and you can open your URL on the browser or open the folder on the file manager through the alias in the future.

<div align="center">

[![npm version](https://img.shields.io/npm/v/to-where-cli.svg?style=flat-square)](https://www.npmjs.org/package/to-where-cli)
[![Build Status](https://github.com/skypesky/to-where-cli/workflows/integration/badge.svg?branch=release)](https://github.com/skypesky/to-where-cli/actions)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=to-where-cli&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=to-where-cli)
[![npm downloads](https://img.shields.io/npm/dm/to-where-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=to-where-cli)

</div>

## install

```shell
npm install -g to-where-cli
```

## usage


- Add an alias to your address

```shell
tw add home https://github.com/skypesky
```

- Open address by alias

```shell
tw home
```

- Update the address of the alias

```shell
tw add home https://github.com/skypesky/leetcode-for-javascript -f
```

- List existing aliases and addresses

```shell
tw list
```

- Remove an alias from your address

```shell
tw rm home
```

- Show help information

```shell
tw -h
```

## Extra

- Open the repo, issue, pr address of github

```shell
~ tw git open -h
Usage: tw git open [options]

Open github repo page, issues page, pr page, ...etc

Options:
  -a, --actions            Open actions page (default: false)
  --author                 Open author profile page (default: false)
  -c, --commit [commitId]  Open commit page
  --committer              Open committer profile page (default: false)
  -f, --file <filePath>    Open specific file page
  --find                   Open the search file page (default: false)
  -i, --issue              Open issues list page (default: false)
  -m, --main               Open main branch page (default: false)
  -p, --pull-request       Open pull request list page (default: false)
  -r, --release            Open release page (default: false)
  -s, --settings           Open settings page (default: false)
  -h, --help               display help for command
```