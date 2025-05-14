import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };

  fullStars?: number[];
  halfStar?: boolean;
  emptyStars?: number[];
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, HttpClientModule, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // to‘g‘rilangan
})
export class AppComponent implements OnInit {
  title = 'Salom bu Asosiy Componenta';
  Items: Product[] = [];

  fullStars: number[] = [1, 2]; // to‘liq yulduzlar
  halfStar: boolean = true;
  emptyStars: number[] = [1, 2]; // bo‘sh yulduzlar

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products'); //{}
  }

  ngOnInit(): void {

    this.getPosts().subscribe((res) => {
      this.Items = res;

      this.Items.forEach((item) => {
        const stars = this.calculateStars(item.rating.rate); // 3.9
        item.fullStars = stars.fullStars;
        item.halfStar = stars.halfStar;
        item.emptyStars = stars.emptyStars;
        
      });
    });
  }


  calculateStars(rate: number) { // 3.9


    const full = Math.floor(rate);  // 3.9 => 3
    const half = rate - full >= 0.5; // 3.9 - 3 = 0.9 => true
    const empty = 5 - full - (half ? 1 : 0); // 5 - 3 - 1 = 1

    return {
      fullStars: Array(full).fill(0), // to‘liq yulduzlardan iborat massiv => [0, 0, 0]
      halfStar: half,  // yarmi yulduzmi yoki yo‘qmi = > true
      emptyStars: Array(empty).fill(0), //  bo‘sh yulduzlardan iborat massiv => [0]
    };
  }
}
