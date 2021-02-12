import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myDreamPipe'
})
export class MyDreamPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
