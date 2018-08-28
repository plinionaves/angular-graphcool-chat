import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseComponent } from '../../../shared/components/base.component';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-chat-users',
  templateUrl: './chat-users.component.html',
  styleUrls: ['./chat-users.component.scss']
})
export class ChatUsersComponent extends BaseComponent<User> implements OnInit {

  users$: Observable<User[]>;

  constructor(
    private userService: UserService
  ) {
    super();
  }

  ngOnInit() {
    this.users$ = this.userService.users$;
  }

}
