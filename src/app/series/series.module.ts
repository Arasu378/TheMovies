import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SerieslistComponent } from './serieslist/serieslist.component';
import { SerieslistService } from './serieslist/service/serieslist.service';



@NgModule({
  declarations: [
    SerieslistComponent
  ],
  imports: [
    SharedModule
  ],
  providers: [
    SerieslistService
  ]
})
export class SeriesModule { }
