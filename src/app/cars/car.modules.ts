import { NgModule } from '@angular/core';
//import { Routes } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import {CarComponent} from "./car/car.component";
import {CarListComponent} from "./car-list/car-list.component";
import {DataTableModule} from "angular2-datatable";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";
import {carRoutes} from "./cars.routing";
import {CarService} from "./shared/car.service";
import {SharedModule} from "../shared/shared.module";



@NgModule({
  declarations: [
    CarComponent,
    CarListComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(carRoutes),
  ],
  exports:[],
  providers:[CarService],
})

export class CarModules {

  constructor () {
  }


}

