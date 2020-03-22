import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPatientLogComponent } from './all-patient-log.component';

describe('AllPatientLogComponent', () => {
  let component: AllPatientLogComponent;
  let fixture: ComponentFixture<AllPatientLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPatientLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPatientLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
