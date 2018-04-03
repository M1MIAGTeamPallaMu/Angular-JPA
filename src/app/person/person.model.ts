import {Home} from '../home/home.model';

export class Person {
  constructor(
    public id?: number,
    public name?: string,
    public surname?: string,
    public mail?: string,
    public homes?: Home[],
    public friends?: Person[],
    public devices?: any,
  ) {
  }
}
