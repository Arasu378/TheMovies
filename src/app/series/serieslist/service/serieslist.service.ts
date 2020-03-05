import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Observable } from 'rxjs';
import { TopRatedSeriesResponse } from '../model/top-rated-series-response.model';
import { Constants } from 'src/app/utils/constants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieslistService {

  constructor(private apiService: ApiService) { }

  public getTopRatedSeries(page: string): Observable<TopRatedSeriesResponse> {
    return this.apiService.get(`${Constants.TOP_RATED_SERIES}${environment.KEY}`);
  }
}
