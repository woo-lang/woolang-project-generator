import {WoolangProject} from '../project/project';

const generator = new WoolangProject('folder', {
  directories: [],
  files: new Map<string, string>([['test', 'Testing']]),
}).createWoolangProject();
