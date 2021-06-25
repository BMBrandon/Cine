import { TestBed } from '@angular/core/testing';

import { SrevicioPersonaService } from './srevicio-persona.service';

describe('SrevicioPersonaService', () => {
  let service: SrevicioPersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrevicioPersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
