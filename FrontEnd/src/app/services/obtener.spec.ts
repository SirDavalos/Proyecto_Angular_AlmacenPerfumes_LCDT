import { TestBed } from '@angular/core/testing';

import { Obtener } from './obtener';

describe('Obtener', () => {
  let service: Obtener;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Obtener);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
