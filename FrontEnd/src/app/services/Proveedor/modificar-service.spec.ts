import { TestBed } from '@angular/core/testing';

import { ModificarServiceProveedor } from './modificar-service';

describe('ModificarService', () => {
  let service: ModificarServiceProveedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificarServiceProveedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
