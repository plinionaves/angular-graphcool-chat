import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  user: User;
  isEditing = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.user = this.authService.authUser;
  }

}
