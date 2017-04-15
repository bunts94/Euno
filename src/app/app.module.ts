import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CounterPageComponent } from './counter-page/counter-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FounderPageComponent } from './founder-page/founder-page.component';
import { AboutPageComponent } from './about-page/about-page.component';

import { appRoutes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    CounterPageComponent,
    NavBarComponent,
    FounderPageComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
