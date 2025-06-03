import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../../Interfaces/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(public http: HttpClient) {}

  getPosts() {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getPost(id: number) {
    return this.http.get<Product>(`https://fakestoreapi.com/products/${id}`); //{}
  }

  calculateStars(rate: number) {
    // 3.9 example

    const full = Math.floor(rate); // 3.9 => 3
    const half = rate - full >= 0.5; // 3.9 - 3 = 0.9 => true
    const empty = 5 - full - (half ? 1 : 0); // 5 - 3 - 1 = 1

    return {
      fullStars: Array(full).fill(0), // to‘liq yulduzlardan iborat massiv => [0, 0, 0]
      halfStar: half, // yarmi yulduzmi yoki yo‘qmi = > true
      emptyStars: Array(empty).fill(0), //  bo‘sh yulduzlardan iborat massiv => [0]
    };
  }
}
