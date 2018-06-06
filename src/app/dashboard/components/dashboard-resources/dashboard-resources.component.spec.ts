import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardResourcesComponent } from './dashboard-resources.component';

describe('DashboardResourcesComponent', () => {
  let component: DashboardResourcesComponent;
  let fixture: ComponentFixture<DashboardResourcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardResourcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
