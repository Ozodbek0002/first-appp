import { Component, OnInit } from '@angular/core';
import { Product } from '../Interfaces/Product';
import { ProductServiceService } from '../Serivces/product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  Item: Product = {
    id: 1,
    title: 'test',
    price: 105,
    description: 'lorem16 ipsum dolor sit amet, consectetur adipiscing elit',
    category: 'electronics',
    image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    rating: {
      rate: 4,
      count: 15,
    },
  };
}
