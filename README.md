# Woolang project generator

> This is a part of [woolang](https://github.com/woo-lang/woolang)

## How to use it

```js
import {WoolangProject} from '../project/project';

const generator = new WoolangProject('folder', {
  directories: [],
  files: new Map<string, string>([['test', 'Testing']]),
}).createWoolangProject();

```

<hr>
