import { TestBed } from '@angular/core/testing';

import { NbaServiceService } from './nba-service.service';

describe('NbaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NbaServiceService = TestBed.get(NbaServiceService);
    expect(service).toBeTruthy();
  });
});
