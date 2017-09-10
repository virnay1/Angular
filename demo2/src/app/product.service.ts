import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProductService {

  timerSubscription : {};

  constructor(private http: HttpClient) {

   }

  products: Product[] = [];

  private loadMockProducts(){
    var product1 = new Product(1,"abc",67.32);
    var product2 = new Product(2,"pqr",23.62);
    this.products.push(product1);
    this.products.push(product2);
  }

  private loadProducts(){      
    
    let url = "http://localhost:49262/api/Products"; 
    return this.http.get<Product[]>(url).
    map(response => {      
      //Wait 2 seconds to ensure data has arrived
      setTimeout(()=>{       
        //Wait 20 milliseonds for the data to arrive 
        //(may need to be changed for production)
        response.forEach(product => this.products.push(product));  
      },20);     
    })    
    .catch((error) => {
      console.log("error " + error);
      throw error;
    });  
    
  }
  //For Mocking and Testing Purposes only
  // getProducts(): Promise<Product[]>{
  //   //Return Mock Data
  //   this.loadMockProducts();   

  //   //Return the data
  //   return Promise.resolve(this.products);
  // }

  getProducts(): Product[]{  

    //Get data from the Service
    this.loadProducts().subscribe(response=>{
      //console.log(this.products);   
      //this.refreshData(); 
    });

    //this.loadProducts();

    //Return the data
    return this.products;
  }
}

