import { Component, OnInit } from '@angular/core';
import { Car } from '../shared/car.model';



@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html'
})
export class CarListComponent implements OnInit {

  cars:[string] = [ 'test 1', 'test 2'];

  constructor() {
    console.log('hello from car list component');
  }

  ngOnInit() {

  }


}
