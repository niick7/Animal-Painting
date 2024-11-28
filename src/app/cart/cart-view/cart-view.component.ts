import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css'],
})
export class CartViewComponent implements OnInit {
  items: Product[] = [];

  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.service.getCartItems().subscribe((data) => {
      this.items = data;
    });
  }
}
