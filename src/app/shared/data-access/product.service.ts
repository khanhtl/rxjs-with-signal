import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({ providedIn: 'root' })
export class ProductService {
  url = 'https://fakestoreapi.com';
  http = inject(HttpClient);
  getProducts() {
    return this.http.get<Product[]>(`${this.url}/products`);
  }

  getProductById(id: number) {
    return this.http.get<Product>(`${this.url}/products/${id}`);
  }
}
