import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { take } from 'rxjs/operators';

import { AppConfigService } from './core/services/app-config.service';
import { AuthService } from './core/services/auth.service';
import { ErrorService } from './core/services/error.service';
import { BaseComponent } from './shared/components/base.component';

@Component({
  selector: 'app-root',
  template: `
    <ul>
      <li *ngFor="let c of collection; trackBy: trackByFn">Item {{ c.id }}</li>
    </ul>
    <button (click)="collection.push({ id: collection.length + 1 })">Add</button>
    <button (click)="collection.shift()">Remove</button>
    <button (click)="onRefresh()">Refresh</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent extends BaseComponent<any> implements OnInit {

  collection = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 }
  ];

  constructor(
    private appConfig: AppConfigService,
    private authService: AuthService,
    private errorService: ErrorService,
    private snackBar: MatSnackBar
  ) {
    super();
  }

  onRefresh(): void {
    this.collection = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 }
    ];
  }

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
