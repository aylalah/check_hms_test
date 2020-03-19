import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PHistoryComponent } from './p-history.component';

describe('PHistoryComponent', () => {
  let component: PHistoryComponent;
  let fixture: ComponentFixture<PHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
