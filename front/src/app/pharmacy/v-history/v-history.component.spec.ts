import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VHistoryComponent } from './v-history.component';

describe('VHistoryComponent', () => {
  let component: VHistoryComponent;
  let fixture: ComponentFixture<VHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
