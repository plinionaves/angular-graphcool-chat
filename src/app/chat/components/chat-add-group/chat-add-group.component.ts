import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

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
    private fb: FormBuilder,
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
    console.log(this.newGroupForm.value);
  }

  removeMember(index: number): void {
    this.members.removeAt(index);
  }

  onSubmit(): void {
    console.log(this.newGroupForm.value);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
