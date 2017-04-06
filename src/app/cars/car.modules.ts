import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    BrowserModule
    //RouterModule.forChild(carRoutes),
  ]
})

export class CarModules {

  constructor () {
    console.log('hello from car module');
  }


}

