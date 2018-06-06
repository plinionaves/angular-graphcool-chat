import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';

const routes: Routes = [
  {
    path: '',
    component: ChatTabComponent,
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule { }
