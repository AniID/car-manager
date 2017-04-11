import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarService } from '../shared/car.service';

@Component({
  selector: "app-cars",
  templateUrl: './car-list.component.html',
  providers: [CarService]
})

  export class CarListComponent {

  constructor(private carService: CarService, private modalService: NgbModal) {}

  get data() {
    return this.carService.getCars();
  }

  open(e, id, content) {
    e.preventDefault();
    this.modalService.open(content).result
      .then((result) => {
        if (result === 'delete') {
          this.deleteCar(id);
        }
      });
  }

  private deleteCar(id: number): void {
    this.carService.deleteCar(id);
  }
}
