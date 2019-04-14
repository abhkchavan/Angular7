import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Iproduct } from 'src/product';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
public product=[];

  constructor(private productservice:ProductserviceService) { }


  ngOnInit() {
    this.productservice.getConfig()
    .subscribe(data => this.product=data);
      

}








}