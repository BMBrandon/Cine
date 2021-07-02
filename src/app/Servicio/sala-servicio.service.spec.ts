import { TestBed } from '@angular/core/testing';

import { SalaServicioService } from './sala-servicio.service';

describe('SalaServicioService', () => {
  let service: SalaServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
