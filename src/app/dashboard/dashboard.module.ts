import { NgModule } from '@angular/core';

import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardHomeComponent,
    DashboardHeaderComponent
  ]
})
export class DashboardModule { }
