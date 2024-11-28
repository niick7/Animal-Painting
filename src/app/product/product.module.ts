import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductListComponent } from './product-list/product-list.component';
import { FlexModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [ProductListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class ProductModule {}
