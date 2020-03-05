import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from "src/app/shared/shared.module";
import { MoviesModule } from './movies/movies.module';
import { AppRoutingModule } from './app.routing';
import { SeriesModule } from './series/series.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
   SharedModule,
   MoviesModule,
   SeriesModule,
   AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
