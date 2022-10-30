
import {join} from "path";


export class SimpleConfig {
  readonly filename: string;
  
  constructor(dir: string) {
    this.filename = join(dir, '.td.config.yml')
  }
  
}