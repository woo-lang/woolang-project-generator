import {existsSync, lstatSync, readdirSync, mkdir, writeFile} from 'fs';
import {join} from 'path';
import {cwd} from 'process';
import {WoolangProjectException} from '../exception/exception';

export interface Project {
  directories: Array<string>;
  files: Map<string, string>;
}

export class WoolangProject {
  private readonly name: string;
  private readonly path: string;
  private readonly directories: Array<string>;
  private readonly files: Map<string, string>;

  /**
   * @constructor
   *
   * @param name The name of the project
   * @param project The information about the project
   * like the directories and files to create along
   * with the project directory
   */
  constructor(name: string, project: Project) {
    this.name = name;
    this.path = this.determineDirectoryPath(this.name);
    this.directories = project.directories;
    this.files = project.files;
  }

  /**
   * @private
   *
   * Determine the path of the directory with the
   * name of the project
   *
   * @param {string} path The name of the project
   * @returns {string} The path of he project
   */
  private determineDirectoryPath = (path: string): string => {
    return path == '.' ? cwd() : join(cwd(), this.name);
  };

  /**
   * @public
   *
   * Create the files and folders related to
   * the project
   *
   * @returns {void | null}
   */
  public createWoolangProject(): void | null {
    if (this.fileExists(this.path)) {
      if (lstatSync(this.path).isDirectory()) {
        const files = readdirSync(this.path);
        if (files.length > 0) {
          const exception = new WoolangProjectException(
            'Folder not empty',
            'Try again with another name',
            'FolderExistsError',
            null
          );
          exception.evokeWoolangException();
          process.exit();
        }
      }
    }

    mkdir(this.path, (err: NodeJS.ErrnoException | null) => {
      if (err) {
        const exception = new WoolangProjectException(
          'An error occured while creating the project directory',
          'Try again',
          'UnknowException',
          null
        ).evokeWoolangException();
      }
    });

    this.directories.forEach((data: string) => {
      const createPath = join(this.path, data);
      mkdir(createPath, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          const exception = new WoolangProjectException(
            `An error occured while creating ${createPath}`,
            'Try again',
            'UnknowException',
            null
          ).evokeWoolangException();
        }
      });
    });

    Array.from(this.files.keys()).forEach((key: string) => {
      const path = join(this.path, key);
      const data =
        this.files.get(key) == undefined ? '' : String(this.files.get(key));

      writeFile(path, data, (err: NodeJS.ErrnoException | null) => {
        if (err) {
          const exception = new WoolangProjectException(
            err.message,
            'Try again',
            'UnknowError',
            null
          ).evokeWoolangException();
        }
      });
    });
  }

  /**
   * @private
   *
   * Check if a specific path exists or not
   *
   * @param {string} path The path to check the existence
   * @returns {boolean}
   */
  private fileExists = (path: string): boolean => {
    try {
      return existsSync(path);
    } catch (exception) {
      return false;
    }
  };
}
