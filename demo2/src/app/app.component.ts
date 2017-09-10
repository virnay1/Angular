import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular Service Demo';
  productsList: Product[];

  constructor(private productService: ProductService){
   
  }

  ngOnInit(){
   this.productsList = this.productService.getProducts();
  }
}
