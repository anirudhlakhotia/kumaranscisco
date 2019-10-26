import { TestBed } from '@angular/core/testing';

import { DatasharingService } from './datasharing.service';

describe('DatasharingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatasharingService = TestBed.get(DatasharingService);
    expect(service).toBeTruthy();
  });
});
