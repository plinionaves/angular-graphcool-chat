import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AllChatsQuery, USER_CHATS_QUERY } from './chat.graphql';
import { AuthService } from '../../core/services/auth.service';
import { Chat } from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private apollo: Apollo,
    private authService: AuthService
  ) { }

  getUserChats(): Observable<Chat[]> {
    return this.apollo.query<AllChatsQuery>({
      query: USER_CHATS_QUERY,
      variables: {
        userId: this.authService.authUser.id
      }
    }).pipe(
      map(res => res.data.allChats)
    );
  }

}
