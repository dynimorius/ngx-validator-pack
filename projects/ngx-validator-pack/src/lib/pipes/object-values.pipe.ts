import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectValues',
  standalone: true
})
export class ObjectValuesPipe implements PipeTransform {
  transform(value: {[key: string]: any}): any[] {
    return Object.values(value);
  }

}
