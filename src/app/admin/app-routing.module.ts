import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserManagementComponent} from "./layout/user-management/user-management.component";
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {MainComponent} from "./layout/main/main.component";


const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    children : [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'user-management', component: UserManagementComponent}
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
