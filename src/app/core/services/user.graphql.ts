import gql from 'graphql-tag';
import { User } from '../models/user.model';

export interface AllUsersQuery {
  allUsers: User[];
}

export const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    allUsers(
      orderBy: name_ASC
    ) {
      id
      name
      email
      createdAt
    }
  }
`;
