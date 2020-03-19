import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmHomeComponent } from './pharm-home.component';

describe('PharmHomeComponent', () => {
  let component: PharmHomeComponent;
  let fixture: ComponentFixture<PharmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
