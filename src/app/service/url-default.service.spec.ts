import { TestBed } from '@angular/core/testing';

import { UrlDefaultService } from './url-default.service';

describe('UrlDefaultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlDefaultService = TestBed.get(UrlDefaultService);
    expect(service).toBeTruthy();
  });
});
