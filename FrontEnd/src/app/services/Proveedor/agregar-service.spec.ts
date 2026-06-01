import { TestBed } from '@angular/core/testing';
import { AgregarServiceProveedor } from './agregar-service';

describe('AgregarServiceProveedor', () => {
  let service: AgregarServiceProveedor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarServiceProveedor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
