import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    let gender = '';
    if (value === 1) {
        gender = 'Female';
    } else if (value === 2) {
        gender = 'Male';
    } else {
        gender = 'Others'
    }
    return gender;
  }

}
