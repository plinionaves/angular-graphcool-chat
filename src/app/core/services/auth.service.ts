import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Apollo } from 'apollo-angular';

import { AUTHENTICATE_USER_MUTATION, SIGNUP_USER_MUTATION } from './auth.graphql';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*
    Subject
    BehaviorSubject
    ReplaySubject
   */

  private _isAuthenticated = new ReplaySubject<boolean>(1);

  constructor(
    private apollo: Apollo
  ) {
    this.isAuthenticated.subscribe(res => {
      console.log('AuthState', res);
    });

    let authState = false;
    setInterval(() => {
      this._isAuthenticated.next(authState);
      authState = !authState;
    }, 5000);
  }

  get isAuthenticated(): Observable<boolean> {
    return this._isAuthenticated.asObservable();
  }

  signinUser(variables: {email: string, password: string}): Observable<{id: string, token: string}> {
    return this.apollo.mutate({
      mutation: AUTHENTICATE_USER_MUTATION,
      variables
    }).pipe(
      map(res => res.data.authenticateUser)
    );
  }

  signupUser(variables: {name: string, email: string, password: string}): Observable<{id: string, token: string}> {
    return this.apollo.mutate({
      mutation: SIGNUP_USER_MUTATION,
      variables
    }).pipe(
      map(res => res.data.signupUser)
    );
  }

}
