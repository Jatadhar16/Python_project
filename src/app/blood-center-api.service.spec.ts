import { TestBed } from '@angular/core/testing';

import { BloodCenterApiService } from './blood-center-api.service';

describe('BloodCenterApiService', () => {
  let service: BloodCenterApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BloodCenterApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
