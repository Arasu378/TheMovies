import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  public logging(value: string): void {
    console.log(value);
  }
  public log(value: any): void {
    console.log(JSON.stringify(value));
  }
}
