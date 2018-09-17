import { Component } from '@angular/core';
import { MatDialog, MatSidenav } from '@angular/material';

import { AuthService } from '../../../core/services/auth.service';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent extends BaseComponent<any> {

  constructor(
    authService: AuthService,
    dialog: MatDialog
  ) {
    super(authService, dialog);
  }

  onLogout(sidenav: MatSidenav): void {
    sidenav.close();
    this.logout();
  }

}
