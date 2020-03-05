import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { MovieDetailsResponse } from './models/movie-details-response.model';
import { Observable } from 'rxjs';
import { Constants } from 'src/app/utils/constants';
import { environment } from 'src/environments/environment';
import { MovieCreditsResponse } from './models/movie-credits-response.model';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {

  constructor(private apiService: ApiService) { }

  public getMovieDetails(movieId: string): Observable<MovieDetailsResponse> {
    let url = Constants.MOVIE_DETAILS.replace('{id}', movieId);
    return this.apiService.get(`${url}${environment.KEY}`);
  }
  public getMovieCredits(movieId: string): Observable<MovieCreditsResponse> {
    let url = Constants.MOVIE_DETAILS_CREDITS.replace('{id}', movieId);
    return this.apiService.get(`${url}${environment.KEY}`);
  }
}
