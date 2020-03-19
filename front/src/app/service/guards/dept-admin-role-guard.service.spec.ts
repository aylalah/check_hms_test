import { TestBed } from '@angular/core/testing';

import { DeptAdminRoleGuardService } from './dept-admin-role-guard.service';

describe('DeptAdminRoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeptAdminRoleGuardService = TestBed.get(DeptAdminRoleGuardService);
    expect(service).toBeTruthy();
  });
});
