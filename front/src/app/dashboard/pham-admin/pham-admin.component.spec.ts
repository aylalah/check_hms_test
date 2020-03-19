import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamAdminComponent } from './pham-admin.component';

describe('PhamAdminComponent', () => {
  let component: PhamAdminComponent;
  let fixture: ComponentFixture<PhamAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
