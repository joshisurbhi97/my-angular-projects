import { TestBed } from '@angular/core/testing';

import { PatientinfoService } from './patientinfo.service';

describe('PatientinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatientinfoService = TestBed.get(PatientinfoService);
    expect(service).toBeTruthy();
  });
});
