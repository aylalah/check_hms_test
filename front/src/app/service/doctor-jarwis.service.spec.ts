import { TestBed } from '@angular/core/testing';

import { DoctorJarwisService } from './doctor-jarwis.service';

describe('DoctorJarwisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoctorJarwisService = TestBed.get(DoctorJarwisService);
    expect(service).toBeTruthy();
  });
});
