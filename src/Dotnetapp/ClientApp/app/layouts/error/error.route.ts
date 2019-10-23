import { Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
  {
    path: 'error',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'dotnetapp'
    }
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'dotnetapp',
      error403: true
    }
  },
  {
    path: '404',
    component: ErrorComponent,
    data: {
      authorities: [],
      pageTitle: 'dotnetapp',
      error404: true
    }
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];
