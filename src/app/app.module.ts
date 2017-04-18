import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {DataTableModule} from 'angular2-datatable';

import {AppComponent} from './app.component';
import {carRoutes} from './cars/cars.routing';
import {CarModules} from './cars/car.modules';
import {appRoutes} from "./app.routes";
import {SharedModule} from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    CarModules,
    SharedModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
