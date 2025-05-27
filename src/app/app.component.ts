import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Salom bu Asosiy Componenta';
}
