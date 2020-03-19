import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBranchComponent } from './set-branch.component';

describe('SetBranchComponent', () => {
  let component: SetBranchComponent;
  let fixture: ComponentFixture<SetBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
