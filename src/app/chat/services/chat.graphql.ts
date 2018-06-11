import gql from 'graphql-tag';
import { Chat } from '../models/chat.model';

export interface AllChatsQuery {
  allChats: Chat[];
}

export const USER_CHATS_QUERY = gql`
  query UserChatsQuery($userId: ID!) {
    allChats(
      filter: {
        users_some: {
          id: $userId
        }
      }
    ) {
      id
      title
      createdAt
      isGroup
      users(
        first: 1,
        filter: {
          id_not: $userId
        }
      ) {
        id
        name
        email
        createdAt
      }
      messages(
        last: 1
      ) {
        id
        text
        sender {
          id
          name
        }
      }
    }
  }
`;
