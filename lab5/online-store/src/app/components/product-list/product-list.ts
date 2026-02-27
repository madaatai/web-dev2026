import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
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
export class ProductListComponent implements OnInit {
  filteredProducts() {
  if (this.category === 'all') return this.products;
  return this.products.filter(p => p.category === this.category);
}

  category: string = 'all';
  products: any[] = []; 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  setCategory(cat: string) {
    this.category = cat;
  }
  
  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
  
  likeProduct(product: Product) {
    product.likes = (product.likes || 0) + 1;
  }
}