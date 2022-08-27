import { TestBed } from '@angular/core/testing';

import { BenhANService } from '../benh-an.service';

describe('BenhANService', () => {
  let service: BenhANService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenhANService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
