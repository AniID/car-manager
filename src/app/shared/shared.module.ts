import {NgModule} from "@angular/core";

import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {DataTableModule} from "angular2-datatable";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule
  ],
  exports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    RouterModule
  ]
})
export class SharedModule { }
