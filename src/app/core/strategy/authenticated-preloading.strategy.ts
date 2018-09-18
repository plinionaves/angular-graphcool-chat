import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedPreloadingStrategy implements PreloadingStrategy {

  constructor(
    private authService: AuthService
  ) {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return this.authService.isAuthenticated
      .pipe(
        mergeMap(is => is ? load() : of(null))
      );
  }

}
