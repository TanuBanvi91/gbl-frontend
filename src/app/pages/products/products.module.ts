import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { ProductDataComponent } from './product-data/product-data.component';
import { ProductsComponent } from './products/products.component'
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    ProductsDashboardComponent,
    ProductDataComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule
  ]
})
export class ProductsModule { }
