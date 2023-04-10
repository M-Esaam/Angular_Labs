import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'Shared/Models/iproduct.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  Products: IProduct[] = [
    { id: 1, name: 'Product 1', quantity: 10, price: 100, img: 'assets/produc1.jpg' },
    { id: 2, name: 'Product 2', quantity: 20, price: 200, img: 'assets/product2.jpg' },
    { id: 3, name: 'Product 3', quantity: 30, price: 300, img: 'assets/product3.jpg' }
  ];
  @Output() productsData = new EventEmitter<IProduct[]>();

  sendProductsData() {
    this.productsData.emit(this.Products);
  }
}
