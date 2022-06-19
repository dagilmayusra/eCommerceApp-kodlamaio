import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
      return this.httpClient.get<User[]>('http://localhost:3000/users');
  }

  getById(id: number) {
      return this.httpClient.get('/api/users/' + id);
  }

  create(user: User) {
      return this.httpClient.post('/api/users', user);
  }

  update(user: User) {
      return this.httpClient.put('/api/users/' + user.id, user);
  }

  delete(id: number) {
      return this.httpClient.delete('/api/users/' + id);
  }
  register(user: User):Observable<User>{
    return this.httpClient.post<User>("http://localhost:3000/users",user)

  }
  login(user: User):Observable<User[]>{
    return this.httpClient.get<User[]>("http://localhost:3000/users?email="+user.email+"&password="+user.password)
  }
}
