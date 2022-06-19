import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  getCategories():Observable<Category[]>{
    return this.httpClient.get<Category[]>("http://localhost:3000/categories")
  }
  addCategory(category:Category):Observable<Category>{
    const  httOptions={
      headers:new HttpHeaders({
        'Content-Type':"application/json",
        'Authorization':'Token'
      })
    }
    return this.httpClient.post<Category>("http://localhost:3000/categories",category,httOptions)

  }
}
