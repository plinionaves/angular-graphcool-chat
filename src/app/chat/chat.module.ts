import { NgModule } from '@angular/core';

import { ChatRoutingModule } from './chat-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ChatTabComponent } from './components/chat-tab/chat-tab.component';

@NgModule({
  imports: [
    SharedModule,
    ChatRoutingModule
  ],
  declarations: [ChatTabComponent]
})
export class ChatModule { }
