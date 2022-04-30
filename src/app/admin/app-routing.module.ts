import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "./user-management/user-management.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./layout/main/main.component";
import { CategoryManagementComponent } from './category-management/category-management.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import {TrademarkManagementComponent} from "./trademark-management/trademark-management.component";
import {StatisticalReportsManagementComponent} from "./statistical-reports-management/statistical-reports-management.component";


const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children : [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'users', component: UserManagementComponent},
      {path: 'categories', component: CategoryManagementComponent},
      {path: 'products', component: ProductManagementComponent},
      {path: 'orders', component: OrderManagementComponent},
      {path: 'trademarks', component: TrademarkManagementComponent},
      {path: 'statistical_reports', component: StatisticalReportsManagementComponent},
    ]
  },

];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppRoutingModule { }
