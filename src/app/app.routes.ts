import {Routes} from "@angular/router";
export const appRoutes: Routes = [{
  path: '',
  redirectTo: '/cars',
  pathMatch: 'full'
},
  {
    path: '**',
    redirectTo: '/cars'
  }];
