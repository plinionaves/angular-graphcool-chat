import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-permission-denied',
  template: `
    <app-warning>
      <h1 class="mat-display-2">Permission denied!</h1>
      <p class="mat-body-1">You tried to access a page that does not have sufficient permissions!</p>
      <p *ngIf="featureBlocked">Feature blocked: "{{ featureBlocked }}"</p>
      <a routerLink="/dashboard" mat-raised-button color="warn">Back to home</a>
    </app-warning>
  `,
  styles: []
})
export class DashboardPermissionDeniedComponent implements OnInit {

  featureBlocked: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(take(1))
      .subscribe(paramMap => this.featureBlocked = paramMap.get('previous'));
  }

}
