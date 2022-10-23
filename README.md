# td

## install

```shell
yarn install
```

## usage

```shell
td add point1
```

## structure

```shell
Usage: td [command] [point]

Commands:
    <point>         Warps to the directory specified by the warp point
    <point> <path>  Warps to the directory specified by the warp point with path appended
    add <point>     Adds the current working directory to your warp points
    add             Adds the current working directory to your warp points with current directory's name
    rm <point>      Removes the given warp point
    rm              Removes the given warp point with current directory's name
    show <point>    Print path to given warp point
    show            Print warp points to current directory
    list            Print all stored warp points
    ls  <point>     Show files from given warp point (ls)
    path <point>    Show the path to given warp point (pwd)
    clean           Remove points warping to nonexistent directories (will prompt unless --force is used)

    -v | --version  Print version
    -d | --debug    Exit after execution with exit codes (for testing)
    -c | --config   Specify config file (default ~/.warprc)
    -q | --quiet    Suppress all output
    -f | --force    Allows overwriting without warning (for add & clean)

    help            Show this extremely helpful text
```