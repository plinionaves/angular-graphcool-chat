import gql from 'graphql-tag';
import { User } from '../models/user.model';

export interface AllUsersQuery {
  allUsers: User[];
}

export interface UserQuery {
  User: User;
}

const UserFragment = gql`
  fragment UserFragment on User {
    id
    name
    email
    createdAt
  }
`;

export const ALL_USERS_QUERY = gql`
  query AllUsersQuery($idToExclude: ID!) {
    allUsers(
      orderBy: name_ASC,
      filter: {
        id_not: $idToExclude
      }
    ) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;

export const GET_USER_BY_ID_QUERY = gql`
  query GetUserByIdQuery($userId: ID!) {
    User(id: $userId) {
      ...UserFragment
    }
  }
  ${UserFragment}
`;
