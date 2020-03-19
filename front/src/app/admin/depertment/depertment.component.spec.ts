import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepertmentComponent } from './depertment.component';

describe('DepertmentComponent', () => {
  let component: DepertmentComponent;
  let fixture: ComponentFixture<DepertmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepertmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepertmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
