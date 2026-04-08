import { TestBed } from '@angular/core/testing';

import { Agregar } from './agregar';

describe('Agregar', () => {
  let service: Agregar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Agregar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
