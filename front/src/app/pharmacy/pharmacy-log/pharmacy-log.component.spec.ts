import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyLogComponent } from './pharmacy-log.component';

describe('PharmacyLogComponent', () => {
  let component: PharmacyLogComponent;
  let fixture: ComponentFixture<PharmacyLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacyLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
