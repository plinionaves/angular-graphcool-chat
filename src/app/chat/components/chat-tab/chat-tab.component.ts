import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-tab',
  template: `
    <nav mat-tab-nav-bar backgroundColor="primary">

      <a mat-tab-link>Chats</a>
      <a mat-tab-link>Users</a>

    </nav>
  `
})
export class ChatTabComponent {}
