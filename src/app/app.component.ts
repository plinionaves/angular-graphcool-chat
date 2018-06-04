import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';

import { AuthService } from './core/services/auth.service';
import { ErrorService } from './core/services/error.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private errorService: ErrorService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.autoLogin()
      .pipe(take(1))
      .subscribe(
        null,
        error => {
          const message = this.errorService.getErrorMessage(error);
          this.snackBar.open(
            `Unexpected error: ${message}`,
            'Done',
            { duration: 5000, verticalPosition: 'top' }
          );
        }
      );
  }

}
