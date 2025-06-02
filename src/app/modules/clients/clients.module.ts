import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [{ path: '', component: MainComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, ClientsRoutingModule],
})
export class ClientsModule {}
