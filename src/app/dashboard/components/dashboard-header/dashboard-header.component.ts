import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatSidenav } from '@angular/material';

import { AuthService } from '../../../core/services/auth.service';
import { BaseComponent } from '../../../shared/components/base.component';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.scss']
})
export class DashboardHeaderComponent extends BaseComponent<any> {

  @Input() sidenav: MatSidenav;

  constructor(
    authService: AuthService,
    dialog: MatDialog,
    public title: Title
  ) {
    super(authService, dialog);
  }

}
