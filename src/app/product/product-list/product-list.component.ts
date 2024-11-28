import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductService } from '../product.service';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  sortOrder: string = '';

  constructor(
    private service: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data;
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product).subscribe({
      next: () => {
        this.snackBar.open('Product added to cart!', '', {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
        });
      },
    });
  }

  applyFilter(event: Event): void {
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.trim().toLowerCase();

    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm)
    );

    this.sortProducts(this.sortOrder);
  }

  sortProducts(sortValue: string) {
    this.sortOrder = sortValue;

    if (this.sortOrder === 'priceLowHigh') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'priceHighLow') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
}
