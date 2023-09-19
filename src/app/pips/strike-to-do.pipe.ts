import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strikeToDo'
})
export class StrikeToDoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(args[0])return value.split('')
    .map(char => char + '\u0336')
    .join('')
    return value;
  }

}
