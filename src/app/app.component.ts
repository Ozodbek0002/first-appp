import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductServiceService } from './Serivces/product-service.service';
import { Product } from './Interfaces/Product';

@Component({
  selector: 'app-root',
  imports: [CommonModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
})
export class AppComponent implements OnInit {
  title = 'Salom bu Asosiy Componenta';
  Items: Product[] = [];
  fullStars: number[] = [1, 2]; 
  halfStar: boolean = true;
  emptyStars: number[] = [1, 2]; 

  constructor(private ProductService: ProductServiceService) {}

  ngOnInit(): void {
    this.ProductService.getPosts().subscribe((res) => {
      this.Items = res;

      this.Items.forEach((item) => {
        const stars = this.ProductService.calculateStars(item.rating.rate); // 3.9

        item.fullStars = stars.fullStars;
        item.halfStar = stars.halfStar;
        item.emptyStars = stars.emptyStars;
      });
    });
  }
}
