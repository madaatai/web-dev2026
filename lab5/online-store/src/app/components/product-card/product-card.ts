import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  mainImage!: string;

  ngOnInit() {
    this.mainImage = this.product.image; 
  }

  setMainImage(url: string) {
    this.mainImage = url;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    const shareUrl = `https://wa.me/?text=Check out this product: ${url}`;
    window.open(shareUrl, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }
}