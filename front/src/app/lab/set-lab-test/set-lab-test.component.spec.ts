import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLabTestComponent } from './set-lab-test.component';

describe('SetLabTestComponent', () => {
  let component: SetLabTestComponent;
  let fixture: ComponentFixture<SetLabTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLabTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLabTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
