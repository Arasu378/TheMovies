import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient,
              private logger: LoggerService) { }

  public get(path: string, options?): Observable<any> {
    this.logger.log(`${environment.URL}${path}`);
    return this.httpClient.get(`${environment.URL}${path}`, options);
  }
}
