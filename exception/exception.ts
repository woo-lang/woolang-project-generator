import {greenBright, red, redBright} from 'chalk';

export class WoolangProjectException {
  private readonly message: string;
  private readonly suggestion: string;
  private readonly type: string;
  private readonly lineNumber: string;

  /**
   * @constructor
   *
   * @param {string} message The message string
   * @param {string} suggestion The suggestion string
   * @param {string} type The error type, FileNotFound, etc
   * @param {number | null} lineNumber The line number at which the error occured
   */

  constructor(
    message: string,
    suggestion: string,
    type: string,
    lineNumber: number | null
  ) {
    this.message = message;
    this.suggestion = suggestion;
    this.type = type;
    this.lineNumber = lineNumber == null ? `` : `Error at line ${lineNumber}`;
  }

  /**
   * @public
   *
   * Throws the exception message along with the details
   * to the console
   *
   * @returns {void}
   */
  public evokeWoolangException = (): void => {
    const messages: Array<string> = [
      red(`[${redBright(this.type)}] ${this.message}`),
      greenBright(this.suggestion),
      redBright(this.lineNumber),
    ];
    for (let index = 0; index < messages.length; index++) {
      console.log(messages[index]);
    }
  };
}
