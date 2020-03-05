import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MovieDetailsService } from '../movie-details/movie-details.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoggerService } from 'src/app/shared/logger.service';
import { Cast } from '../movie-details/models/movie-credits-response.model';

@Component({
  selector: 'app-castandcrew',
  templateUrl: './castandcrew.component.html',
  styleUrls: ['./castandcrew.component.css']
})
export class CastandcrewComponent implements OnInit {
  public castCount: number = 0;
  public crewCount: number = 0;
  private id: string;
  public casts: Cast[];
  public crews: Cast[];

  constructor(private location: Location,
              private route: ActivatedRoute,
              private logger: LoggerService,
              private router: Router,
              private service: MovieDetailsService) { 
                this.id = this.route.snapshot.paramMap.get('id');
              }

  ngOnInit() {
    this.getMovieCrew();
  }
  private getMovieCrew(): void {
    this.service.getMovieCredits(this.id).subscribe(response => {
      this.crews = response.crew;
      this.casts = response.cast;
      this.crewCount =  this.crews.length;
      this.castCount =  this.casts.length;
    });
  }

  public goBack(): void {
    this.location.back();
  }
  public biography(crew: Cast): void {
    this.router.navigate(['/biography/' + crew.id]);
  }

}
