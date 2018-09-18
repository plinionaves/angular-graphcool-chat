import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './login/auth.guard';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { SelectivePreloadingStrategy } from './core/strategy/selective-preloading.strategy';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [ AuthGuard ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
