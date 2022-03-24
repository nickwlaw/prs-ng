import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

// configure base url
const userRoute = "/users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = environment.apiBaseUrl + userRoute

  constructor(private http: HttpClient) { }

  // http://localhost:8080/users/
  getAll(): Observable<User[]> {
    let requestUrl = this.url + '/'
    return this.http.get<User[]>(requestUrl)
  }

  // http://localhost:8080/users/{id}
  getById(id: number): Observable<User[]> {
    let requestUrl = this.url + '/' + id
    return this.http.get<User[]>(requestUrl)
  }

  // http://localhost:8080/users"
  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.url, user)
  }

  // http://localhost:8080/users/{id}
  updateUser(user: User): Observable<User[]> {
    let requestUrl = this.url + '/' + user.id
    return this.http.put<User[]>(requestUrl, user)
  }

  deleteById(id: number): Observable<User[]> {
    let requestUrl = this.url + '/' + id
    return this.http.delete<User[]>(requestUrl)
  }
}
