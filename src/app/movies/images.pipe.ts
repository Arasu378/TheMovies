import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/constants';

@Pipe({
  name: 'images'
})
export class ImagesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return `${Constants.IMAGE_500}${value}`;
  }

}
