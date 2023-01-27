# to-where-cli

> Currently only supports [macOS](https://en.wikipedia.org/wiki/MacOS)

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
tw git open // Open current branch page
tw git open -a // Open actions page 
tw git open --author // Open author profile page 
tw git open -c // Open committer profile
tw git open -i // Open issues list page 
tw git open -m // Open main branch page
tw git open -p // Open pull request list page
tw git open -r // Open release page 
tw git open -s // Open settings page 
tw git open --sha // Open current sha page
tw git open -h // display help for command
```