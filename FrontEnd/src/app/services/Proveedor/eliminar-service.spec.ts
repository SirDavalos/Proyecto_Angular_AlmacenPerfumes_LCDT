import { TestBed } from '@angular/core/testing';

import { EliminarServiceProveedor } from './eliminar-service';

describe('EliminarService', () => {
  let service: EliminarServiceProveedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarServiceProveedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
