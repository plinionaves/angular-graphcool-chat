import gql from 'graphql-tag';
import { Message } from '../models/message.model';

export interface AllMessagesQuery {
  allMessages: Message[];
}

export const GET_CHAT_MESSAGES_QUERY = gql`
  query GetChatMessagesQuery($chatId: ID!) {
    allMessages(
      filter: {
        chat: {
          id: $chatId
        }
      },
      orderBy: createdAt_ASC
    ) {
      id
      text
      createdAt
      sender {
        id
        name
        email
        createdAt
      }
      chat {
        id
      }
    }
  }
`;

export const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation($text: String!, $chatId: ID!, $senderId: ID!) {
    createMessage(
      text: $text,
      chatId: $chatId,
      senderId: $senderId
    ) {
      id
      text
      createdAt
      sender {
        id
        name
        email
        createdAt
      }
      chat {
        id
      }
    }
  }
`;
