import { Component } from '@angular/core';
import { DiscountOffers } from 'Shared/Models/discount-offers.enum';
import { ICategory } from 'Shared/Models/icategory.interface';
import { IProduct } from 'Shared/Models/iproduct.interface';
import { UpperCasePipe, PercentPipe } from '@angular/common';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [
    { provide: 'StoreNamePipe', useValue: UpperCasePipe },
    { provide: 'DiscountPipe', useValue: PercentPipe },
  ],
})
export class ProductsComponent {
  Discount:DiscountOffers  = DiscountOffers.TenPercent;
  // Discount = DiscountOffers.NoDiscount;
  StoreName = 'EL 3ooSS';
  StoreLogo = 'assets/122.jpg';
  ProductList: IProduct[] = [
    { id: 1, name: 'Product 1', quantity: 10, price: 100, img: 'assets/produc1.jpg' },
    { id: 2, name: 'Product 2', quantity: 20, price: 200, img: 'assets/product2.jpg' },
    { id: 3, name: 'Product 3', quantity: 30, price: 300, img: 'assets/product3.jpg' }
  ];
  CategoryList: ICategory[] = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' }
  ];
  ClientName = 'Mahmoud';
  IsPurchased : boolean= true;
  buyProduct() {
    this.IsPurchased =! this.IsPurchased ;
  }
  constructor() { }
}
