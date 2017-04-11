import { Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarListComponent } from './car-list/car-list.component';

export const carRoutes: Routes = [
  {
    path: 'car',
    component: CarComponent
  },
 {
    path: 'car/:id',
    component: CarComponent
  },
  {
    path: 'cars',
    component: CarListComponent
  },
  {
    path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/cars'
  }
];
