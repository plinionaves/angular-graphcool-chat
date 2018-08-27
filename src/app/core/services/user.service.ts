import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import {
  ALL_USERS_QUERY,
  GET_USER_BY_ID_QUERY,
  NEW_USERS_SUBSCRIPTION,
  AllUsersQuery,
  UserQuery
} from './user.graphql';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private queryRef: QueryRef<AllUsersQuery>;

  constructor(
    private apollo: Apollo
  ) { }

  allUsers(idToExclude: string): Observable<User[]> {
    this.queryRef = this.apollo
      .watchQuery<AllUsersQuery>({
        query: ALL_USERS_QUERY,
        variables: {
          idToExclude
        }
      });

    this.queryRef.subscribeToMore({
      document: NEW_USERS_SUBSCRIPTION,
      updateQuery: (previous: AllUsersQuery, { subscriptionData }): AllUsersQuery => {

        const newUser: User = subscriptionData.data.User.node;

        return {
          ...previous,
          allUsers: ([newUser, ...previous.allUsers]).sort((uA, uB) => {
            if (uA.name < uB.name) { return -1; }
            if (uA.name > uB.name) { return 1; }
            return 0;
          })
        };
      }
    });

    return this.queryRef.valueChanges
      .pipe(
        map(res => res.data.allUsers)
      );
  }

  getUserById(id: string): Observable<User> {
    return this.apollo
      .query<UserQuery>({
        query: GET_USER_BY_ID_QUERY,
        variables: { userId: id }
      }).pipe(
        map(res => res.data.User)
      );
  }

}
