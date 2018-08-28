import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
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

  users$: Observable<User[]>;
  private queryRef: QueryRef<AllUsersQuery>;
  private usersSubscription: Subscription;

  constructor(
    private apollo: Apollo
  ) { }

  startUsersMonitoring(idToExclude: string): void {
    if (!this.users$) {
      console.log('Start');
      this.users$ = this.allUsers(idToExclude);
      this.usersSubscription = this.users$.subscribe();
    }
  }

  stopUsersMonitoring(): void {
    if (this.usersSubscription) {
      console.log('Stop');
      this.usersSubscription.unsubscribe();
      this.usersSubscription = null;
      this.users$ = null;
    }
  }

  allUsers(idToExclude: string): Observable<User[]> {
    this.queryRef = this.apollo
      .watchQuery<AllUsersQuery>({
        query: ALL_USERS_QUERY,
        variables: {
          idToExclude
        },
        fetchPolicy: 'network-only'
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
