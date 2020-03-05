import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PopularMoviesComponent } from './popular-movies/popular-movies.component';
import { PopularMoviesService } from './popular-movies.service';
import { ImagesPipe } from './images.pipe';
import { TextRestrictionPipe } from './text-restriction.pipe';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieDetailsService } from './movie-details/movie-details.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CastandcrewComponent } from './castandcrew/castandcrew.component';
import { BiographyComponent } from './biography/biography.component';
import { GenderPipe } from './gender.pipe';



@NgModule({
  declarations: [
    PopularMoviesComponent,
    ImagesPipe,
    TextRestrictionPipe,
    MovieDetailsComponent,
    CastandcrewComponent,
    BiographyComponent,
    GenderPipe
  ],
  imports: [
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [
    PopularMoviesService,
    MovieDetailsService
  ]
})
export class MoviesModule { }
