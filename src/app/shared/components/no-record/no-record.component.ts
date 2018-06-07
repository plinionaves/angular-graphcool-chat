import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-record',
  template: `
    <div class="container">
      <mat-icon>{{ icon }}</mat-icon>
      <h3>{{ title }}</h3>
    </div>
  `,
  styleUrls: ['./no-record.component.scss']
})
export class NoRecordComponent {
  @Input() icon: string;
  @Input() title: string;
}
