import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabformsRoutingModule } from './labforms-routing.module';
import { LabformsDashboardComponent } from './labforms-dashboard/labforms-dashboard.component';
import { LabformsComponent } from './labforms/labforms.component';


@NgModule({
  declarations: [
    LabformsDashboardComponent,
    LabformsComponent
  ],
  imports: [
    CommonModule,
    LabformsRoutingModule
  ]
})
export class LabformsModule { }
