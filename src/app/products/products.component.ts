import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../Interfaces/Product';
import { ProductServiceService } from '../Serivces/product-service.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  Items: Product[] = [];
  originalItems: Product[] = [];
  fullStars: number[] = [1, 2];
  halfStar: boolean = true;
  emptyStars: number[] = [1, 2];

  constructor(private ProductService: ProductServiceService) {}

  ngOnInit(): void {
    this.ProductService.getPosts().subscribe((res) => {
      this.Items = res;
      this.originalItems = [...this.Items];

      this.Items.forEach((item) => {
        const stars = this.ProductService.calculateStars(item.rating.rate); // 3.9

        item.fullStars = stars.fullStars;
        item.halfStar = stars.halfStar;
        item.emptyStars = stars.emptyStars;
      });
    });
  }

  search(text: string) {
    if (text) {
      this.Items = this.originalItems.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase())
      );
    } else {
      this.Items = [...this.originalItems];
    }
  }

  showProduct(id: number) {
    alert(`Product ID: ${id}`);
  }
}
