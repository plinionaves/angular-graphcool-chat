import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { DataProxy } from 'apollo-cache';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  AllMessagesQuery,
  CREATE_MESSAGE_MUTATION,
  GET_CHAT_MESSAGES_QUERY
} from './message.graphql';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private apollo: Apollo
  ) { }

  getChatMessages(chatId: string): Observable<Message[]> {
    return this.apollo.watchQuery<AllMessagesQuery>({
      query: GET_CHAT_MESSAGES_QUERY,
      variables: { chatId }
    }).valueChanges
      .pipe(
        map(res => res.data.allMessages)
      );
  }

  createMessage(message: {text: string, chatId: string, senderId: string}): Observable<Message> {
    return this.apollo.mutate({
      mutation: CREATE_MESSAGE_MUTATION,
      variables: message,
      optimisticResponse: {
        __typename: 'Mutation',
        createMessage: {
          __typename: 'Message',
          id: '',
          text: message.text,
          createdAt: new Date().toISOString(),
          sender: {
            __typename: 'User',
            id: message.senderId,
            name: '',
            email: '',
            createdAt: ''
          },
          chat: {
            __typename: 'Chat',
            id: message.chatId
          }
        }
      },
      update: (store: DataProxy, {data: { createMessage }}) => {

        try {

          const data = store.readQuery<AllMessagesQuery>({
            query: GET_CHAT_MESSAGES_QUERY,
            variables: { chatId: message.chatId }
          });

          data.allMessages = [...data.allMessages, createMessage];

          store.writeQuery({
            query: GET_CHAT_MESSAGES_QUERY,
            variables: { chatId: message.chatId },
            data
          });

        } catch (e) {
          console.log('allMessagesQuery not found!');
        }

      }
    }).pipe(
      map(res => res.data.createMessage)
    );
  }

}
