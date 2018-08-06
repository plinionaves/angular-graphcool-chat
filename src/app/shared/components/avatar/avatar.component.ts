import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <div class="avatar-container" [ngStyle]="containerStyles">
      <img [src]="src" [title]="title || 'Avatar'" [ngStyle]="imageStyles" />
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() src: string;
  @Input() title: string;
  @Input() imageStyles: {[key: string]: string | number} = {};
  @Input() containerStyles: {[key: string]: string | number} = {};
}
