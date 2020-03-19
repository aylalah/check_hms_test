import { TestBed } from '@angular/core/testing';

import { AdminRoleGuardService } from './admin-role-guard.service';

describe('AdminRoleGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminRoleGuardService = TestBed.get(AdminRoleGuardService);
    expect(service).toBeTruthy();
  });
});
