import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTaskboardComponent } from './patient-taskboard.component';

describe('PatientTaskboardComponent', () => {
  let component: PatientTaskboardComponent;
  let fixture: ComponentFixture<PatientTaskboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientTaskboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTaskboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
