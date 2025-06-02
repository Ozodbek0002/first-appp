import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { NotFountPageComponent } from './shared/not-fount-page/not-fount-page.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductComponent,
  },
  {
    path: '**',
    component: NotFountPageComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },
];
