import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.scss']
})
export class ChatUsersComponent implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.users$ = this.userService.allUsers(this.authService.authUser.id);
    setTimeout(() => {
      this.users$ = of([]);
    }, 3000);
  }

}
