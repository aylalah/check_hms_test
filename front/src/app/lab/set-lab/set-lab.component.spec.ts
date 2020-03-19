import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetLabComponent } from './set-lab.component';

describe('SetLabComponent', () => {
  let component: SetLabComponent;
  let fixture: ComponentFixture<SetLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
