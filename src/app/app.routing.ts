import { PopularMoviesComponent } from "./movies/popular-movies/popular-movies.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { CastandcrewComponent } from './movies/castandcrew/castandcrew.component';
import { BiographyComponent } from './movies/biography/biography.component';
import { SerieslistComponent } from './series/serieslist/serieslist.component';


const routes = [
{
    path: 'popular',
    component: PopularMoviesComponent
},
{
    path: '',
    redirectTo: 'popular',
    pathMatch: 'full' 
},
{
    path: 'movie-info/:id',
    component: MovieDetailsComponent
},
{
    path: 'cast/:id',
    component: CastandcrewComponent
},
{
    path: 'biography/:id',
    component: BiographyComponent
},
{
    path: 'series-list/:type',
    component: SerieslistComponent
}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: [

    ]
})
export class AppRoutingModule {}