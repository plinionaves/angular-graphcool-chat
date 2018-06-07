import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/user.model';
import { ALL_USERS_QUERY, AllUsersQuery } from './user.graphql';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private apollo: Apollo
  ) { }

  allUsers(idToExclude: string): Observable<User[]> {
    return this.apollo
      .query<AllUsersQuery>({
        query: ALL_USERS_QUERY,
        variables: {
          idToExclude
        }
      }).pipe(
        map(res => res.data.allUsers)
      );
  }

}
