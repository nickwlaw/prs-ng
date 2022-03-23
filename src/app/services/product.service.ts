import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';

const productRoute = "/products"

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = environment.apiBaseUrl + productRoute

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]> {
    let requestUrl = this.url + '/'
    return this.http.get<Product[]>(requestUrl)
  }

  // http://localhost:8080/products/{id}
  getById(id: number): Observable<Product[]> {
    let requestUrl = this.url + '/' + id
    return this.http.get<Product[]>(requestUrl)
  }

  // http://localhost:8080/products"
  createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(this.url, product)
  }
}
