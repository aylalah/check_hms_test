import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySupplyComponent } from './daily-supply.component';

describe('DailySupplyComponent', () => {
  let component: DailySupplyComponent;
  let fixture: ComponentFixture<DailySupplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailySupplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailySupplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
