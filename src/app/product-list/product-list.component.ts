import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {


  products = [
    {id: 1, title: "Brosse à dents"}
  ]
  constructor() { }

  ngOnInit() {
  }

}
