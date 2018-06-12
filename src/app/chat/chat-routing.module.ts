import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../login/auth.guard';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';
import { ChatUsersComponent } from './components/chat-users/chat-users.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatWindowResolver } from './components/chat-window/chat-window.resolver';

const routes: Routes = [
  {
    path: '',
    component: ChatTabComponent,
    canActivate: [ AuthGuard ],
    canActivateChild: [ AuthGuard ],
    children: [
      { path: 'users', component: ChatUsersComponent },
      { path: '', component: ChatListComponent }
    ]
  },
  {
    path: ':id',
    component: ChatWindowComponent,
    canActivate: [ AuthGuard ],
    resolve: { chat: ChatWindowResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ ChatWindowResolver ]
})
export class ChatRoutingModule { }
