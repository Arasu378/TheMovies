import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textRestriction'
})
export class TextRestrictionPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    
    if(value.length > 150) {
      let str = '';
      str = value.substring(0,150).concat('...');
      return str;
    }
    return value;
  }

}
