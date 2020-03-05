import { Component, OnInit } from '@angular/core';
import { BiographyService } from './biography.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoggerService } from 'src/app/shared/logger.service';
import { Cast } from '../movie-details/models/movie-credits-response.model';
import { BiographyResponse } from './models/biography-response.model';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrls: ['./biography.component.css']
})
export class BiographyComponent implements OnInit {
  private id: string;
  public cast: BiographyResponse;
  public site: string = '-';
  constructor(private route: ActivatedRoute,
              private service: BiographyService,
              private router: Router,
              private logger: LoggerService,
              private location: Location) {
                this.id = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit() {
    this.getBiography();
  }
  private getBiography(): void {
    this.service.getBiography(this.id).subscribe(response => {
      this.cast = response;
      this.logger.log(this.cast.gender);
      if (response.homepage != null) {
        this.site = response.homepage;
      }
     
    });
  }
  public goBack(): void {
    this.location.back();
  }
 
}
