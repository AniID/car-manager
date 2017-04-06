import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { }

import { AppComponent } from './app.component';

import { carRoutes } from './cars/cars.routing';
import { CarModules } from "./cars/car.modules";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CarModules,
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(carRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
