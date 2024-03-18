import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LabformsDashboardComponent } from './labforms-dashboard/labforms-dashboard.component';
import { LabformsComponent } from './labforms/labforms.component';

const routes: Routes = [
 {path: '', component: LabformsComponent,
 children:[
  {path:'', component:LabformsDashboardComponent}
 ]

 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabformsRoutingModule { }
