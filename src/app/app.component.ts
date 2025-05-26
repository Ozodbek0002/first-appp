import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Salom bu Asosiy Componenta';
}
