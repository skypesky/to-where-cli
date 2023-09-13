> If you want to know more about the usage, please refer to the [documentation](https://skypesky.gitbook.io/to-where-cli/).

# to-where-cli

<div align="center">

[![npm version](https://img.shields.io/npm/v/to-where-cli.svg?style=flat-square)](https://www.npmjs.org/package/to-where-cli)
[![Build Status](https://github.com/skypesky/to-where-cli/workflows/integration/badge.svg?branch=release)](https://github.com/skypesky/to-where-cli/actions)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=to-where-cli&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=to-where-cli)
[![npm downloads](https://img.shields.io/npm/dm/to-where-cli.svg?style=flat-square)](https://npm-stat.com/charts.html?package=to-where-cli)

</div>

> Currently only supports [macOS](https://en.wikipedia.org/wiki/MacOS), [Windows](https://en.wikipedia.org/wiki/Windows)

Use the alias mechanism to help you open obscure URLs that are hard to remember. Helps you to open various addresses of github repositories, straight to the search page of npm, google and other sites.

### Features

- [x] Open hard-to-remember websites by alias
- [x] Open various pages of the github repository (issue, pull request, start...)
- [x] Go straight to the search npm page
- [x] Go straight to the search github page
- [x] Go straight to the search google page
- [x] Go straight to the search bing page
- [x] Go straight to the search baidu page

## Install

```shell
npm install -g to-where-cli
```

## Basic usage


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
tw add home https://github.com/skypesky/leetcode-for-javascript
```

- List existing alias home

```shell
tw ls home
```

- Remove an alias from your address

```shell
tw rm home
```

- Show help information

```shell
tw -h
```
