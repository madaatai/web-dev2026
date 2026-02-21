import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-images',
  imports: [NgOptimizedImage],
  template: `

    <li> image:
      <img ngSrc="{{imageUrl}}" [alt]="imageAlt" height="300" width="500" priority />
    </li>


    `

})

export class Image {
  imageUrl = 'https://i.pinimg.com/1200x/7f/fc/7c/7ffc7c6d8dd6c041f774d91f71d2def4.jpg';
  imageAlt = 'joel<3';
}