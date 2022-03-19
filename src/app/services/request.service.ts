import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Request } from '../models/request.model';

// configure base url
const requestRoute = "/requests"

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url = environment.apiBaseUrl + requestRoute

  constructor(private http: HttpClient) { }

  // http://localhost:8080/requests/
  getAll(): Observable<Request[]> {
    let requestUrl = this.url + '/'
    return this.http.get<Request[]>(requestUrl)
  }
}
