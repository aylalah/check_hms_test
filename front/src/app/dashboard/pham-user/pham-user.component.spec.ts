import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhamUserComponent } from './pham-user.component';

describe('PhamUserComponent', () => {
  let component: PhamUserComponent;
  let fixture: ComponentFixture<PhamUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhamUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhamUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
