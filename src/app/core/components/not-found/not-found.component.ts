import { Component, OnDestroy } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-not-found',
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z2">Angular Graphcool Chat</mat-toolbar>
    <app-warning>
      <h1 class="mat-display-4">OOPS!</h1>
      <h2 class="mat-headline">Error 404, page not found!</h2>
      <a routerLink="/dashboard" mat-raised-button color="warn">Back to home</a>
    </app-warning>
  `,
  styles: []
})
export class NotFoundComponent implements OnDestroy {

  constructor(
    private authService: AuthService
  ) { }

  ngOnDestroy(): void {
    this.authService.redirectUrl = null;
  }

}
