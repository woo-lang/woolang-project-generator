# Woolang project generator

> This is a part of [woolang](https://github.com/woo-lang/woolang)

## How to use it

```py
from context import Project, ProjectFiles

project = Project("t", ProjectFiles(
    {
        "hello" : "frfefe"
    },
    ["data"]
)).create()

```

<hr>
