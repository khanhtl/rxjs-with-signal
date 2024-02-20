import { Component, inject } from '@angular/core';
import { ProductListComponent } from './ui/product-list.component';
import { ProductStore } from '../shared/data-access/product.store';
@Component({
  standalone: true,
  imports: [ProductListComponent],
  selector: 'app-product',
  template: ` <app-product-list [products]="productStore.products()" /> `,
  styles: [``],
})
export default class ProductComponent {
  productStore = inject(ProductStore);
}
