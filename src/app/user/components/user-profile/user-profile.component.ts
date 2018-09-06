import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  isEditing = false;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = JSON.parse(JSON.stringify(this.authService.authUser));
  }

  onSave(): void {
    console.log('User: ', this.user);
    this.userService.updateUser(this.user)
      .pipe(take(1))
      .subscribe(
        (user: User) => {
          console.log('Updated! ', user);
        }
      );
  }

}
