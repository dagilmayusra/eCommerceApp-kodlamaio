import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string) {
    return this.httpClient.get<Product>("http://localhost:3000/products")
    /*  
    return this.http.post<any>('/api/authenticate', { username: username, password: password })
          .map(user => {
              // login successful if there's a jwt token in the response
              if (user && user.token) {
                  // store user details and jwt token in local storage to keep user logged in between page refreshes
                  localStorage.setItem('currentUser', JSON.stringify(user));
              }

              return user;
          });
          */
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
