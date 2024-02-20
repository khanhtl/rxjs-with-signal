import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from '../../shared/interfaces/product';
import { MatButtonModule } from '@angular/material/button';
@Component({
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  selector: 'app-product-item',
  template: `<mat-card class="product-card">
    <img
    class="product-card-image"
      width="300"
      height="200"
      mat-card-image
      [src]="product.image"
      [alt]="product.title"
    />
    <mat-card-content>
      <p>
        {{ product.title }}
      </p>
      <h2>{{ '$' +product.price}}</h2>
    </mat-card-content>
    <mat-card-actions style="margin-top: auto;">
      <button color="primary" mat-button>Add to card</button>
    </mat-card-actions>
  </mat-card>`,
  styles: [
    `
      :host {
        max-width: 300px;
        padding: 8px;
        display: inline-block;
        .product-card {
          height: 370px;
          &-image {
            margin-bottom: 16px;
          }
        }
      }
    `,
  ],
})
export class ProductItemComponent {
  @Input({ required: true }) product!: Product;
}
