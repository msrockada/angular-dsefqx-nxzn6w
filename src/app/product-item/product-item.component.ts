import { Component, OnInit } from '@angular/core';
import { products } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products = products;

   public show:boolean = false;

  ngOnInit () {  }

  toggle() {
    this.show = !this.show;

  }
}