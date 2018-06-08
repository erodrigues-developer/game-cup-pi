import { TestBed, inject } from '@angular/core/testing';

import { TorneioService } from './torneio.service';

describe('TorneioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TorneioService]
    });
  });

  it('should be created', inject([TorneioService], (service: TorneioService) => {
    expect(service).toBeTruthy();
  }));
});
