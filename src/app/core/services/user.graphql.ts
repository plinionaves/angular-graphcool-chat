import gql from 'graphql-tag';
import { User } from '../models/user.model';

export interface AllUsersQuery {
  allUsers: User[];
}

export const ALL_USERS_QUERY = gql`
  query AllUsersQuery($idToExclude: ID!) {
    allUsers(
      orderBy: name_ASC,
      filter: {
        id_not: $idToExclude
      }
    ) {
      id
      name
      email
      createdAt
    }
  }
`;
