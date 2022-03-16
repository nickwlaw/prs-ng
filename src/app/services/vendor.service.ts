import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vendor } from '../models/vendor.model';

// configure base url
const vendorRoute = "/vendors"

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private url = environment.apiBaseUrl + vendorRoute

  constructor(private http: HttpClient) { }

  getAll(): Observable<Vendor[]> {
    let requestUrl = this.url + '/'
    return this.http.get<Vendor[]>(requestUrl)
  }
}
