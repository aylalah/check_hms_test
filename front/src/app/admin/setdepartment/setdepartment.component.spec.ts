import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetdepartmentComponent } from './setdepartment.component';

describe('SetdepartmentComponent', () => {
  let component: SetdepartmentComponent;
  let fixture: ComponentFixture<SetdepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetdepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetdepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
