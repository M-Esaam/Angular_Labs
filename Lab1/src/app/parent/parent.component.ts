import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { IProduct } from 'Shared/Models/iproduct.interface';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  productList: IProduct[] = [];

  getProductsData() {
    this.productList.push(this.childComponent.productsData);
  }

  sayHello() {
    this.child.sayWelcome();
  }
}
