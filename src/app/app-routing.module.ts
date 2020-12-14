import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrationComponent } from './addration/addration.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { DisplayrationComponent } from './displayration/displayration.component';
import { HomeComponent } from './home/home.component';
import { UpdateRevenueComponent } from './update-revenue/update-revenue.component';
import { UpdaterationComponent } from './updateration/updateration.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'rationshops',component:DisplayallComponent},
  {path:'add_ration',component:AddrationComponent},
  {path:'rationshop/:id',component:DisplayrationComponent},
  {path:'updateRevenue/:id',component:UpdateRevenueComponent},
  {path:'updateRation/:id',component:UpdaterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
