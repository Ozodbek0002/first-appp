import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';

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
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/clients/clients.module').then((m) => m.ClientsModule),
  },
];
