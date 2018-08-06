import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: `
    <p>
      avatar works!
    </p>
  `,
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() src: string;
  @Input() title: string;
  @Input() imageStyles: {[key: string]: string | number} = {};
  @Input() containerStyles: {[key: string]: string | number} = {};
}
