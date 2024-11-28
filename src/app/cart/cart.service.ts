import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private apiURL = environment.apiURL + '/cart';
  constructor(private httpClient: HttpClient) {}

  getCartItems(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL);
  }

  addToCart(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiURL, product);
  }

  clearCart(): Observable<void> {
    return this.httpClient.delete<void>(this.apiURL);
  }
}
