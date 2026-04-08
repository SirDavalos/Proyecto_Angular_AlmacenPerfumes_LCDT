import { TestBed } from '@angular/core/testing';

import { Eliminar } from './eliminar';

describe('Eliminar', () => {
  let service: Eliminar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Eliminar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
