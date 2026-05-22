import { TestBed } from '@angular/core/testing';

import { AgregarService } from './agregar-service';
import { Perfume } from '../interfaces/perfume';

describe('AgregarService', () => {
  let service: AgregarService;
  let producto: Perfume = {
    id: 0,
    nombre: '',
    precio: 0,
    cantidad: 0,
    marca: '',
    proveedor: '',
    tipo: '',
    linea: '',
    aroma_salida: '',
    aroma_corazon: '',
    aroma_fondo: ''
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgregarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a new perfume', () => {
    service.agregarPerfume(producto).subscribe({
      next: (respuesta: any) => {
        expect(respuesta).toBeTruthy();
      }
    });
  });
});
