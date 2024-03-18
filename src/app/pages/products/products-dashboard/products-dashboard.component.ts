import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-dashboard',
  templateUrl: './products-dashboard.component.html',
  styleUrls: ['./products-dashboard.component.scss']
})
export class ProductsDashboardComponent {

  constructor(private route:Router){}

  products = [
    {title: "Juice Production", status: true, image: "../../../../assets/factory-svgrepo-com.svg"},
    {title: "Baggasse", status: true, image: "../../../../assets/baggasse.svg"},
    {title: "Press Mud", status: false, image: "../../../../assets/press-mud.svg"},
    {title: "Clear Juice", status: false, image: "../../../../assets/clear-juice.svg"},
    {title: "Syrup", status: true, image: "../../../../assets/syrup.svg"},
    {title: "B Heavy Molasses", status: false, image: "../../../../assets/molasses.svg"},
    {title: "C Heavy Molasses", status: true, image: "../../../../assets/molasses.svg"},
    {title: "Sugar Production", status: true, image: "../../../../assets/sugar-production.svg"}
  ]

  navigateToProduct(){
    this.route.navigateByUrl('allproducts/product')
  }

  

}
