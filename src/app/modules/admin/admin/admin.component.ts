import { Component } from '@angular/core';
import { NavbarComponent } from '../../../navbar/navbar.component';
import { FooterComponent } from '../../../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin',
  imports: [NavbarComponent, RouterOutlet, FooterComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  isCollapsed = false;
}
