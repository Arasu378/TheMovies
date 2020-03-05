import { Component, OnInit } from '@angular/core';
import { PopularMoviesService } from '../popular-movies.service';
import { Result } from './models/result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  public results: Result[];
  public page: number = 1;
  public loading = true;
  public navListData = ["Popular", "Now Playing", "Top Rated", "UpComing..", "Get Trending"];
  public navListSeriesData = ["Airing Today", "TV On the Air", "Popular", "Top Rated", "Get Trending"];

  constructor(private service: PopularMoviesService,
              private router: Router) { }

  ngOnInit() {
    this.getPopularMovies();
  }
  onScroll(): void {  
    
    this.page = this.page + 1;  
    this.getPopularMovies();  
  }  
  private getPopularMovies(): void {
    this.service.getPopularMovies(this.page).subscribe(response => {
      this.loading = false;
      this.results = response.results;
      this.page = response.page;
    });
  }
  private getNowPlaying(): void {
    this.service.getNowPlaying(this.page).subscribe(response => {
      this.loading = false;
      this.results = response.results;
      this.page = response.page;
    });
  }
  private getTopRated(): void {
    this.service.getTopRated(this.page).subscribe(response => {
      this.loading = false;
      this.results = response.results;
      this.page = response.page;
    });
  }
  private getUpcoming(): void {
    this.service.getUpComing(this.page).subscribe(response => {
      this.loading = false;
      this.results = response.results;
      this.page = response.page;
    });
  }
  private getTrending(): void {
    this.service.getTrending(this.page).subscribe(response => {
      this.loading = false;
      this.results = response.results;
      this.page = response.page;
    });
  }

  public selectedTopic(data: string): void {
    console.log(data);
     switch(data) {
       case 'Popular':
         this.getPopularMovies();
         break;
      case 'Now Playing':
        this.getNowPlaying();
         break;
      case 'Top Rated':
        this.getTopRated();
        break;
      case 'UpComing..':
        this.getUpcoming();
        break;
      case 'Get Trending':
        this.getTrending();
        break;

     }
  }
  public selectedSeries(data: string): void {
    // "Airing Today", "TV On the Air", "Popular", "Top Rated", "Get Trending"
    let id = '';
    switch(data) {
      case 'Airing Today':
        id = '1';
        break;
      case 'TV On the Air':
        id = '2';
        break;
      case 'Popular':
        id = '3';
        break;
      case 'Top Rated':
        id = '4';
        break;
      case 'Get Trending':
        id = '5';
        break;
    }
    this.router.navigate(['/series-list/' + id]);
  }
  public selectedMovie(result: Result): void {
    this.router.navigate([`${'/movie-info/'} ${result.id}`]);
  }

}
