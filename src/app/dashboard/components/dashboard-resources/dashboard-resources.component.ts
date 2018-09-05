import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-resources',
  template: `
    <mat-nav-list>

      <a
        mat-list-item
        [routerLink]="link.url"
        *ngFor="let link of resources"
        (click)="onClose()">
          <mat-icon matListIcon>{{ link.icon }}</mat-icon>
          <h3 matLine>{{ link.title }}</h3>
      </a>

      <ng-content></ng-content>

    </mat-nav-list>
  `
})
export class DashboardResourcesComponent implements OnInit {

  @Input() isMenu = false;
  @Output() close = new EventEmitter<void>();

  resources: any[] = [
    {
      url: '/dashboard/chat',
      icon: 'chat_bubble',
      title: 'My Chats'
    },
    {
      url: '/dashboard/chat/users',
      icon: 'people',
      title: 'All Users'
    },
    {
      url: '/dashboard/profile',
      icon: 'person',
      title: 'Profile'
    }
  ];

  ngOnInit(): void {
    if (this.isMenu) {
      this.resources.unshift({
        url: '/dashboard',
        icon: 'home',
        title: 'Home'
      });
    }
  }

  onClose(): void {
    this.close.emit();
  }

}
