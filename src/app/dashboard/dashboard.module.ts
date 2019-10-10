import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SubComponent } from './sub/sub.component';
import { NgxAuthorizationModule } from 'ngx-authorization';

@NgModule({
  declarations: [DashboardComponent, SubComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxAuthorizationModule
  ]
})
export class DashboardModule { }
