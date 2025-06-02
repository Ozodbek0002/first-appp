import { Component, input, OnInit } from '@angular/core';
import { ProductServiceService } from '../Serivces/product-service.service';
import { Product } from '../Interfaces/Product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [CommonModule, RouterModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  Item: Product = {} as Product;
  id: number = 1;

  constructor(
    private ProductService: ProductServiceService,
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.ProductService.getPost(this.id).subscribe((res) => {
      this.Item = res;

      console.log('Product Component Data:', this.Item);

      const stars = this.ProductService.calculateStars(res.rating.rate);
      this.Item.fullStars = stars.fullStars;
      this.Item.halfStar = stars.halfStar;
      this.Item.emptyStars = stars.emptyStars;
    });
  }
}
