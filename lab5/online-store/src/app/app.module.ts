import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProductItemComponent } from './components/product-item/product-item';
import { ProductListComponent } from './components/product-list/product-list';
import { AppComponent } from './app';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent,
    ProductListComponent,
    ProductItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}