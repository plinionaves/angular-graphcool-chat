import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  template: `
    <div class="warning-container">
      <mat-card>
        <mat-card-content>
          <ng-content></ng-content>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [
    `
    .warning-container {
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-direction: column;
    }

    mat-card {
      margin-top: 20px;
      width: 80vw;
      text-align: center;
    }
    `
  ]
})
export class WarningComponent {}
