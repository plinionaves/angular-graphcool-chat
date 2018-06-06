import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { DashboardResourcesComponent } from './components/dashboard-resources/dashboard-resources.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: '', component: DashboardResourcesComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
