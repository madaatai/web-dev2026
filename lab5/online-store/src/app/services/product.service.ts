import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    {
        id: 1,
        name: 'iPhone 15 128GB',
        category: 'smartphone',
        description: 'Apple smartphone with A16 chip and improved camera system.',
        price: 399000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000',
        liked: false,
        likes: 0
    },
    {
        id: 2,
        name: 'iPhone 17 Pro Max',
        category: 'smartphone',
        description: 'Latest Apple smartphone with A17 chip and high-end triple camera.',
        price: 1369157,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-oranzhevyi-145468211/?c=750000000',
        liked: false,
        likes: 0
    }, 
    {
        id: 3,
        name: 'Apple Watch SE',
        description: 'Smartwatch with fitness tracking, heart monitoring and notifications.',
        price: 139890,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000',
        category: 'tablet',
        liked: false,
        likes: 0
    },
    {
        id: 4,
        name: 'AirPods Pro 2',
        description: 'Wireless earbuds with noise cancellation and premium sound quality.',
        price: 109000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
        category: 'headphones',
        liked: false,
        likes: 0
    },
    {
        id: 5,
        name: 'MacBook Air 13',
        description: 'Lightweight laptop with Apple M2 chip and all-day battery life.',
        price: 859990,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h75/h66/64159805800478.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2f/h9d/64159816613918.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h75/h66/64159805800478.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h22/hd0/64159812354078.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-512-gb-macos-mly23-106053697/?c=750000000',
        category: 'laptop',
        liked: false,
        likes: 0
    },
    {
        id: 6,
        name: 'Apple iPad A16',
        description: 'Tablet with fast A16 chip, Retina display, and long battery life.',
        price: 201000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000',
        category: 'tablet',
        liked: false,
        likes: 0
    },
    {
        id: 7,
        name: 'Apple Watch Series 9',
        description: 'Smartwatch with fitness tracking and always-on display.',
        price: 178899,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h06/h98/83874224799774.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hd9/h0b/83874224865310.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hea/h87/83874224930846.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000',
        category: 'tablet',
        liked: false,
        likes: 0
    },
    {
        id: 8,
        name: 'Apple MacBook Pro 16',
        description: 'Powerful laptop with M2 Pro chip, high-res screen and fast SSD.',
        price: 2609980,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p5e/p1c/18087106.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p5e/p1c/18087106.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p97/p1c/18087108.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p97/p1c/18087108.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-48-gb-ssd-1000-gb-macos-mx2w3ru-a-132850417/?c=750000000',
        category: 'laptop',
        liked: false,
        likes: 0
    },
    {
        id: 9,
        name: 'Dyson Airwrap',
        description: 'Hair styler with multiple attachments for curling, drying, and straightening.',
        price: 337000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pa5/40929286.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p2f/pa5/40929286.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p9b/p54/40929290.jpeg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pff/p8c/40929302.jpeg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-airwrap-co-anda-2x-stailer-fioletovyi-sirenevyi-138973740/?c=750000000',
        category: 'tablet',
        liked: false,
        likes: 0
    },
    {
        id: 10,
        name: 'Canon PowerShot G7 X Mark III',
        description: 'Compact camera with 20MP sensor, 4K video and flip-up screen.',
        price: 638587,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/he0/h0b/63813275058206.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h41/h62/63813277646878.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h82/h27/63813280825374.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000',
        category: 'tablet',
        liked: false,
        likes: 0
    }
  ];

  getProducts() {
    return this.products;
  }

  deleteProduct(product: Product) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}