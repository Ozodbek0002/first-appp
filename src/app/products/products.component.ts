import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Interfaces/Product';
import { ProductServiceService } from '../Serivces/product-service.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  Items: Product[] = [];
  originalItems: Product[] = [];
  fullStars: number[] = [1, 2];
  halfStar: boolean = true;
  emptyStars: number[] = [1, 2];
  searchText: string = '';

  constructor(
    private ProductService: ProductServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ProductService.getPosts().subscribe((res) => {
      this.Items = res;
      this.originalItems = res;

      this.Items.forEach((item) => {
        const stars = this.ProductService.calculateStars(item.rating.rate);
        item.fullStars = stars.fullStars;
        item.halfStar = stars.halfStar;
        item.emptyStars = stars.emptyStars;
      });
    });
  }

  search(text: string) {
    console.log(text);
    if (text) {
      this.Items = this.originalItems.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      this.Items = [...this.originalItems];
    }
  }

  showProduct(id: number) {
    this.router.navigate(['/products', id]);
  }
}
