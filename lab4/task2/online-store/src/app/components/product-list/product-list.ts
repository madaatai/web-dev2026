import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 128GB',
      description: 'Apple smartphone with A16 chip and improved camera system.',
      price: 399000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h81/h37/86303335186462.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/hf6/83559333953566.png?format=gallery-medium',
        'data:image/jpeg;base64,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'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-rozovyi-113137949/?c=750000000'
    },
    {
      id: 2,
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
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      id: 3,
      name: 'iPhone 17 Pro Max',
      description: 'Latest Apple smartphone with A17 chip and high-end triple camera.',
      price: 1369157,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p79/p88/64170093.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p41/p88/64170091.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p24/p88/64170090.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-2tb-oranzhevyi-145468211/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-8-gb-ssd-512-gb-macos-mly23-106053697/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-m-l-45-mm-sinii-chernyi-113398437/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-48-gb-ssd-1000-gb-macos-mx2w3ru-a-132850417/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/dyson-airwrap-co-anda-2x-stailer-fioletovyi-sirenevyi-138973740/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/canon-powershot-g7-x-mark-iii-chernyi-2240141/?c=750000000'
    }
  ];

}