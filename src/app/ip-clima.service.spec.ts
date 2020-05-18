import { TestBed } from '@angular/core/testing';

import { IpClimaService } from './ip-clima.service';

describe('IpClimaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IpClimaService = TestBed.get(IpClimaService);
    expect(service).toBeTruthy();
  });
});
