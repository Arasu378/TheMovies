import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Observable } from 'rxjs';
import { PopularMovieResponse } from './popular-movies/models/popular-movie-response.model';
import { Constants } from '../utils/constants';
import { environment } from 'src/environments/environment';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PopularMoviesService {

  constructor(private apiService: ApiService) { }
  

  public getPopularMovies(page: number): Observable<PopularMovieResponse> {
    let params = new HttpParams().set('page', page.toString());
    return this.apiService.get(`${Constants.POPULAR_MOVIES}${environment.KEY}`, { params: params });
  }
  public getNowPlaying(page: number): Observable<PopularMovieResponse> {
    return this.apiService.get(`${Constants.NOW_PLAYING_MOVIES}${environment.KEY}`);
  }
  public getTopRated(page: number): Observable<PopularMovieResponse> {
    return this.apiService.get(`${Constants.TOP_RATED_MOVIES}${environment.KEY}`);
  }
  public getUpComing(page: number): Observable<PopularMovieResponse> {
    return this.apiService.get(`${Constants.UPCOMING_MOVIES}${environment.KEY}`);
  }
  public getTrending(page: number): Observable<PopularMovieResponse> {
    return this.apiService.get(`${Constants.TRENDING}${environment.KEY}`);
  }
}
