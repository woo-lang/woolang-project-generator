import { existsSync, lstatSync, readdirSync } from "fs"
import { join } from "path"
import { cwd } from "process"

export interface Project {
    directories : Array<string>,
    files : Array<string>
}

export class WoolangProject {
    private readonly name:string
    private readonly path:string
    private readonly directories:Array<string>
    private readonly files:Array<string>

    constructor(name:string, project:Project){
        this.name = name
        this.path = this.determineDirectoryPath(this.name)
        this.directories = project.directories
        this.files = project.files
    }

    private determineDirectoryPath = (path:string):string => {
        return path == "." ? cwd() : join(cwd(), this.name)
    }

    public createWoolangProject():void | null {
        if(this.fileExists(this.path)){
            if(lstatSync(this.path).isDirectory()){
                const files = readdirSync(this.path)
                console.log(files)
            }
        }
    }

    private fileExists = (path:string):boolean => {
        try {
            return existsSync(path)
        } catch(exception){
            return false
        }
    }
}