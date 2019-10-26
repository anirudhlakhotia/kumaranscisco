import { TestBed } from '@angular/core/testing';

import { OrganizeruserService } from './organizeruser.service';

describe('OrganizeruserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizeruserService = TestBed.get(OrganizeruserService);
    expect(service).toBeTruthy();
  });
});
