import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';

@Injectable()
export class ChatWindowResolver implements Resolve<Chat> {

  constructor(
    private chatService: ChatService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Chat> {
    const chatOrUserId: string = route.paramMap.get('id');
    return this.chatService.getChatByIdOrByUsers(chatOrUserId);
  }

}
