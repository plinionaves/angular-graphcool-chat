import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-chat-tab',
  template: `
    <nav mat-tab-nav-bar backgroundColor="primary">

      <a mat-tab-link
        routerLink="./"
        routerLinkActive
        #chatsRla="routerLinkActive"
        [active]="chatsRla.isActive"
        [routerLinkActiveOptions]="{exact: true}">
          Chats
      </a>

      <a mat-tab-link
        routerLink="users"
        routerLinkActive
        #usersRla="routerLinkActive"
        [active]="usersRla.isActive">
          Users
      </a>

    </nav>

    <router-outlet></router-outlet>
  `
})
export class ChatTabComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private chatService: ChatService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.chatService.startChatsMonitoring();
    this.userService.startUsersMonitoring(this.authService.authUser.id);
  }

}
