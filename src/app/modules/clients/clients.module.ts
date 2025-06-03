import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProductsComponent } from '../../products/products.component';
import { ProductComponent } from '../../product/product.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
