import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';
import { ProductDataComponent } from './product-data/product-data.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '', component: ProductsComponent,
    children: [
      { path: '', component: ProductsDashboardComponent },
      { path: 'product', component: ProductDataComponent }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
