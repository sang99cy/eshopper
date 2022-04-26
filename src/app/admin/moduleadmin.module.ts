import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {SidebarComponent} from "./layout/sidebar/sidebar.component";
import {UserManagementComponent} from "./layout/user-management/user-management.component";
import {AppRoutingModule} from "./app-routing.module";
import {NbThemeModule, NbCardModule} from '@nebular/theme';
import {DashboardComponent} from "./dashboard/dashboard.component";
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  NbMenuService,
  NbSidebarService,
   NbLayoutModule, NbSidebarModule, NbContextMenuModule, NbActionsModule, NbMenuModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import {NgxDatatableModule} from "@tusharghoshbd/ngx-datatable";
@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    UserManagementComponent,
    DashboardComponent,
    FooterComponent,
    MainComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        // NbThemeModule,
        NbCardModule,
        RouterModule, HttpClientModule,
        NbMenuModule.forRoot(),
        NbLayoutModule,
        NbSidebarModule,
        NbContextMenuModule,
        NbActionsModule,
        NbThemeModule.forRoot({name: 'default'}),
        BrowserAnimationsModule, NgxDatatableModule
    ],
  providers: [ NbMenuService, NbSidebarService ],
})
export class ModuleadminModule { }
