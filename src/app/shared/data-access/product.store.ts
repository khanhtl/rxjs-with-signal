import { Injectable, computed, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product';
import { State } from '../interfaces/state';
import { ProductService } from './product.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class ProductStore {
  #productService = inject(ProductService);
  products$ = this.#productService.getProducts();
  #products = signal<State<Product[]>>({
    loaded: false,
    data: [],
  });
  products = computed(() => this.#products().data);
  loaded = computed(() => this.#products().loaded);
  constructor() {
    // reducers
    this.products$
      .pipe(takeUntilDestroyed())
      .subscribe((data) =>
        this.#products.update((products) => ({
          ...products,
          data,
          loaded: false,
        }))
      );
  }
}
