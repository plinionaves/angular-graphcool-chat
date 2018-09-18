import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPermissionDeniedComponent } from './dashboard-permission-denied.component';

describe('DashboardPermissionDeniedComponent', () => {
  let component: DashboardPermissionDeniedComponent;
  let fixture: ComponentFixture<DashboardPermissionDeniedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardPermissionDeniedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPermissionDeniedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
