import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MovieDetailsService } from './movie-details.service';
import { LoggerService } from 'src/app/shared/logger.service';
import { Result } from 'electron';
import { MovieDetailsResponse } from './models/movie-details-response.model';
import { MovieCreditsResponse, Cast } from './models/movie-credits-response.model';
import {Location} from '@angular/common';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  private id: string;
  public result: MovieDetailsResponse;
  public credit: MovieCreditsResponse;
  public casts: Cast[];
  public backdropPath: string;

  constructor( private route: ActivatedRoute,
              private service: MovieDetailsService,
              private router: Router,
              private logger: LoggerService,
              private _location: Location) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getMovieDetailsCredits();
    this.getMovieDetails();
  }

  private getMovieDetails(): void {
    this.service.getMovieDetails(this.id).subscribe(response => {
      this.result = response;
      this.backdropPath = response.backdrop_path;
      this.logger.log(this.backdropPath);
    });
  }

  private getMovieDetailsCredits(): void {
    this.service.getMovieCredits(this.id).subscribe(response => {
      this.credit = response;
      this.casts = response.cast;
    });
  }
  public goBack(): void {
    this._location.back();
  }
  public castAndCrew(): void {
    this.router.navigate(['/cast/' + this.id]);
  }
  public biography(cast: Cast): void {
    this.router.navigate(['/biography/' + cast.id]);
  }
}
