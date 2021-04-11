import { greenBright, red, redBright } from 'chalk'

export class WoolangProjectException {
    private readonly message:string
    private readonly suggestion:string
    private readonly type:string
    private readonly lineNumber:string

    constructor(message:string, suggestion:string, type:string, lineNumber:number | null){
        this.message = message
        this.suggestion = suggestion
        this.type = type
        this.lineNumber = lineNumber == null ? `` : `at ${lineNumber}`
    }

    public evokeWoolangException = ():void => {
          const messages:Array<string> = [
              red(`[${redBright(this.type)}] ${this.message}`),
              greenBright(this.suggestion),
              redBright(this.lineNumber)
          ]
          for(let index=0; index<messages.length; index++){
              console.log(messages[index])
          }
    }
}