import { TestBed } from '@angular/core/testing';

import { StaffRoleGuardService } from './staff-role-guard.service';

describe('StaffRoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffRoleGuardService = TestBed.get(StaffRoleGuardService);
    expect(service).toBeTruthy();
  });
});
