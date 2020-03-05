import { TestBed } from '@angular/core/testing';

import { SerieslistService } from './serieslist.service';

describe('SerieslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerieslistService = TestBed.get(SerieslistService);
    expect(service).toBeTruthy();
  });
});
