import { TestBed } from '@angular/core/testing';

import { Modificar } from './modificar';

describe('Modificar', () => {
  let service: Modificar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Modificar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
