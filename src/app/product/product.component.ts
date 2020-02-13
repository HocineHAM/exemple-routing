import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'rt-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
productId:number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productId = parseInt(this.route.snapshot.paramMap.get('id'));
  }

}
