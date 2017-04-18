import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../shared/car.service';
import { Car } from '../shared/car.model';
import { Fuels, Transmissions } from '../shared/mock-cars';


@Component({
  selector: "app-car",
  templateUrl: './car.component.html',
  providers: [CarService]
})

export class CarComponent implements OnInit {
  id = null;
  car = new Car();
  fuels = Fuels;
  transmissions = Transmissions;

  constructor(private carService: CarService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      this.id = +this.route.snapshot.params['id'];
      this.car = this.carService.getCar(this.id);
    }
  }

  saveForm(value: any):void{
    if (this.car.id) {
      this.carService.updateCar(this.car.id, this.car);
    } else {
      this.carService.addCar(this.car);
    }
    this.router.navigateByUrl('/cars');
  }
}
