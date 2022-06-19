import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient:HttpClient) { }
  getProducts(val:number):Observable<Product[]>{
    return this.httpClient.get<Product[]>("http://localhost:3000/products?categoryId="+val)
  }

  addProduct(product:Product):Observable<Product>{
    const  httOptions={
      headers:new HttpHeaders({
        'Content-Type':"application/json",
        'Authorization':'Token'
      })
    }
    return this.httpClient.post<Product>("http://localhost:3000/products",product,httOptions)

  }
  deleteProduct(val:number):Observable<Product>{
    return this.httpClient.delete<Product>("http://localhost:3000/products/"+val)
  }
  getProductById(val:number):Observable<Product>{    
    return this.httpClient.get<Product>("http://localhost:3000/products/"+val)
  }
  updateProduct(product:Product):Observable<Product>{
    return this.httpClient.put<Product>("http://localhost:3000/products/"+product.id, product)
  }
}
