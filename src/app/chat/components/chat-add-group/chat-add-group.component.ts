import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Observable, Subscription } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Chat } from '../../models/chat.model';
import { ChatService } from '../../services/chat.service';
import { User } from '../../../core/models/user.model';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-chat-add-group',
  templateUrl: './chat-add-group.component.html',
  styleUrls: ['./chat-add-group.component.scss']
})
export class ChatAddGroupComponent implements OnDestroy, OnInit {

  newGroupForm: FormGroup;
  users$: Observable<User[]>;
  private subscriptions: Subscription[] = [];

  constructor(
    private chatService: ChatService,
    private dialogRef: MatDialogRef<ChatAddGroupComponent>,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.createForm();
    this.listenMembersList();
  }

  private listenMembersList(): void {
    this.subscriptions.push(
      this.members.valueChanges
        .subscribe(() => {
          this.users$ = this.users$
            .pipe(
              map(users => users.filter(user => this.members.controls.every(c => c.value.id !== user.id)))
            );
        })
    );
  }

  private createForm(): void {
    this.newGroupForm = this.fb.group({
      title: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      members: this.fb.array([], Validators.required)
    });
  }

  get title(): FormControl { return <FormControl>this.newGroupForm.get('title'); }
  get members(): FormArray { return <FormArray>this.newGroupForm.get('members'); }

  addMember(user: User): void {
    this.members.push(this.fb.group(user));
  }

  removeMember(index: number): void {
    this.members.removeAt(index);
  }

  onSubmit(): void {
    const formValue = Object.assign({
      title: this.title.value,
      usersIds: this.members.value.map(m => m.id)
    });

    this.chatService.createGroup(formValue)
      .pipe(take(1))
      .subscribe((chat: Chat) => {
        this.dialogRef.close();
        this.snackBar.open(`${chat.title} created!`, 'OK', { duration: 3000 });
      });

  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
