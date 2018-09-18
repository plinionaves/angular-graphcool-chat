import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { BaseComponent } from '../../../shared/components/base.component';
import { Chat } from '../../models/chat.model';
import { ChatAddGroupComponent } from '../chat-add-group/chat-add-group.component';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent extends BaseComponent<Chat> implements OnInit {

  chats$: Observable<Chat[]>;

  constructor(
    protected authService: AuthService,
    private chatService: ChatService,
    protected dialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {
    this.chats$ = this.chatService.chats$;
  }

  getChatTitle(chat: Chat): string {
    return chat.title || chat.users[0].name;
  }

  getLastMessage(chat: Chat): string {
    const message = chat.messages[0];
    if (message) {
      const sender =
        (message.sender.id === this.authService.authUser.id)
          ? 'You'
          : message.sender.name;
      return `${sender}: ${message.text}`;
    }
    return 'No messages.';
  }

  onAddGroup(): void {
    this.dialog.open(ChatAddGroupComponent, { width: '400px', maxHeight: '80vh' });
  }

}
