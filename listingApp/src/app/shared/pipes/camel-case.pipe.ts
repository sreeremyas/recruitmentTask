import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return value;
    }
    value = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    value = value.replace(/_/g, ' ');

    return value;
  }

}
