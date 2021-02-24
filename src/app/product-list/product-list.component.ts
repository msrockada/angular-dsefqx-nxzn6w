import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  show:boolean = false;

  share() {
    window.alert('The product has been shared!');
    window.location.href = "tg://msg_url?text=tahnk yu for sharing!&url=amazon.com"
   
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
    toggle() {
    this.show = !this.show;

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/