import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillDetailsComponent } from './refill-details.component';

describe('RefillDetailsComponent', () => {
  let component: RefillDetailsComponent;
  let fixture: ComponentFixture<RefillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
