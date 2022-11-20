# to-where-cli

Give your URL and folder an alias, and you can open your URL or folder through the alias in the future.


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