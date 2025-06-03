import { Routes } from '@angular/router';
import { NotFountPageComponent } from './shared/not-fount-page/not-fount-page.component';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
  },

  {
    path: '**',
    component: NotFountPageComponent,
  },
];
