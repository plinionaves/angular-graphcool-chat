import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatAddGroupComponent } from './chat-add-group.component';

describe('ChatAddGroupComponent', () => {
  let component: ChatAddGroupComponent;
  let fixture: ComponentFixture<ChatAddGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatAddGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatAddGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
