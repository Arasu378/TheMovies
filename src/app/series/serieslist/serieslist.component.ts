import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/shared/logger.service';
import { SerieslistService } from './service/serieslist.service';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-serieslist',
  templateUrl: './serieslist.component.html',
  styleUrls: ['./serieslist.component.css']
})
export class SerieslistComponent implements OnInit {
  private page: number = 1;
  private type: string;
  constructor(private logger: LoggerService,
              private service: SerieslistService,
              private route: ActivatedRoute,
              private location: Location) {
                this.type = this.route.snapshot.paramMap.get('id');
               }

  ngOnInit() {
    this.getTopRatedSeries();
  }
  private getTopRatedSeries(): void {
    this.service.getTopRatedSeries(this.page.toString()).subscribe(response => {
      this.logger.log(response);
    })
  }
  public goBack(): void {
    this.location.back();
  }
}
