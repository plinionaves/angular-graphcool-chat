import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-add-group',
  templateUrl: './chat-add-group.component.html',
  styleUrls: ['./chat-add-group.component.scss']
})
export class ChatAddGroupComponent implements OnInit {

  newGroupForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    this.newGroupForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get title(): FormControl { return <FormControl>this.newGroupForm.get('title'); }

  onSubmit(): void {
    console.log(this.newGroupForm.value);
  }

}
