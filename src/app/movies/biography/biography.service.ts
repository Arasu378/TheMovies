import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Observable } from 'rxjs';
import { BiographyResponse } from './models/biography-response.model';
import { Constants } from 'src/app/utils/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BiographyService {

  constructor(private apiService: ApiService) { }

  public getBiography(id: string): Observable<BiographyResponse> {
    let url = Constants.PERSON_BIOGRAPHY.replace('{id}', id);
    return this.apiService.get(`${url}${environment.KEY}`);
  }

}
