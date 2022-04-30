import { Component, OnInit } from '@angular/core';
import {HttpServerService} from "../../service/http-server.service";
import {HttpProdService} from "../../service/http-prod.service";

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  public productShop: any;

  constructor(
    private product: HttpServerService,
    private infProd: HttpProdService
  ) {}

  ngOnInit(): void {
    this.product.getProductShop().subscribe((data) => {
      console.log('data', data);
      this.productShop = data;
    });
  }


}
