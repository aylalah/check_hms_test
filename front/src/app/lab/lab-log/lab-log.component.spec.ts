import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabLogComponent } from './lab-log.component';

describe('LabLogComponent', () => {
  let component: LabLogComponent;
  let fixture: ComponentFixture<LabLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
