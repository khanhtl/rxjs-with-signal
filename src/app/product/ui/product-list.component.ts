import { Component, Input } from '@angular/core';
import { ProductItemComponent } from './product-item.component';
import { Product } from '../../shared/interfaces/product';
import { JsonPipe } from '@angular/common';
@Component({
  standalone: true,
  imports: [ProductItemComponent, JsonPipe],
  selector: 'app-product-list',
  template: `
    <div class="product-list">
      @for (product of products; track product.id) {
      <app-product-item [product]="product" />
      }
    </div>
  `,
  styles: [
    `
      
    `,
  ],
})
export class ProductListComponent {
  @Input({ required: true }) products!: Product[];
}
