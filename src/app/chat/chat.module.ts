import { NgModule } from '@angular/core';

import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatMessageComponent } from './components/chat-message/chat-message.component';
import { ChatRoutingModule } from './chat-routing.module';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';
import { ChatUsersComponent } from './components/chat-users/chat-users.component';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule
  ],
  declarations: [
    ChatListComponent,
    ChatMessageComponent,
    ChatTabComponent,
    ChatUsersComponent,
    ChatWindowComponent
  ]
})
export class ChatModule { }
