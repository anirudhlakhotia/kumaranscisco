import { TestBed } from '@angular/core/testing';

import { InterestSendingService } from './interest-sending.service';

describe('InterestSendingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterestSendingService = TestBed.get(InterestSendingService);
    expect(service).toBeTruthy();
  });
});
