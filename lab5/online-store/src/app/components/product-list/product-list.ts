import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Input() horizontal: boolean = false;

  @Output() toggle = new EventEmitter<number>();

  onToggle(productId: number) {
    this.toggle.emit(productId);
  }
  @Output() like = new EventEmitter<Product>();
  onLike(product: Product) {
    this.like.emit(product);
}
}