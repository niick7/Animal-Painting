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
  totalPrice: number = 0;

  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.service.getCartItems().subscribe((data) => {
      this.items = data;
      this.totalPrice = this.getTotalPrice();
    });
  }

  getTotalPrice(): number {
    let total = 0;
    for (let item of this.items) {
      total += item.price;
    }

    return total;
  }
}
