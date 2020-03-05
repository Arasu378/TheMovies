import { TestBed } from '@angular/core/testing';

import { BiographyService } from './biography.service';

describe('BiographyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiographyService = TestBed.get(BiographyService);
    expect(service).toBeTruthy();
  });
});
