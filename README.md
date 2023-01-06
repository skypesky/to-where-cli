# to-where-cli

Give your URL and folder an alias, and you can open your URL on the browser or open the folder on the file manager through the alias in the future.


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