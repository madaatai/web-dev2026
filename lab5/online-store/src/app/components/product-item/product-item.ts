import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItemComponent {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<Product>();
  @Output() like = new EventEmitter<Product>();

  mainImage!: string;

  ngOnInit() {
    this.mainImage = this.product.image;
  }

  setMainImage(url: string) {
    this.mainImage = url;
  }

  likeProduct() {
    this.like.emit(this.product);
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }

  shareWhatsApp() {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(this.product.link)}`,
      '_blank'
    );
  }

  shareTelegram() {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`,
      '_blank'
    );
  }
}