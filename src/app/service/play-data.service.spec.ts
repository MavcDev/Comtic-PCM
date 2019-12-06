import { TestBed } from '@angular/core/testing';

import { PlayDataService } from './play-data.service';

describe('PlayDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayDataService = TestBed.get(PlayDataService);
    expect(service).toBeTruthy();
  });
});
