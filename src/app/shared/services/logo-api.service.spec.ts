import { TestBed } from '@angular/core/testing';

import { LogoApiService } from './logo-api.service';

describe('LogoApiService', () => {
  let service: LogoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
