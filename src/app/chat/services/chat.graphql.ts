import gql from 'graphql-tag';
import { Chat } from '../models/chat.model';

export interface AllChatsQuery {
  allChats: Chat[];
}

export interface ChatQuery {
  Chat: Chat;
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

export const CHAT_BY_ID_OR_BY_USERS_QUERY = gql`
  query ChatByIdOrByUsersQuery($chatId: ID!, $loggedUserId: ID!, $targetUserId: ID!) {

    Chat(
      id: $chatId
    ) {
      id
      title
      createdAt
      isGroup
      users(
        first: 1,
        filter: {
          id_not: $loggedUserId
        }
      ) {
        id
        name
        email
        createdAt
      }
    }

    allChats(
      filter: {
        AND: [
          { users_some: { id: $loggedUserId } },
          { users_some: { id: $targetUserId } }
        ],
        isGroup: false
      }
    ) {
      id
      title
      createdAt
      isGroup
      users(
        first: 1,
        filter: {
          id_not: $loggedUserId
        }
      ) {
        id
        name
        email
        createdAt
      }
    }

  }
`;

export const CREATE_PRIVATE_CHAT_MUTATION = gql`
  mutation CreatePrivateChatMutation($loggedUserId: ID!, $targetUserId: ID!) {
    createChat(
      usersIds: [
        $loggedUserId,
        $targetUserId
      ]
    ) {
      id
      title
      createdAt
      isGroup
      users(
        first: 1,
        filter: {
          id_not: $loggedUserId
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
