import { TestBed } from '@angular/core/testing';

import { ObtenerServiceProveedor } from './obtener-service';

describe('ObtenerService', () => {
  let service: ObtenerServiceProveedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerServiceProveedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
