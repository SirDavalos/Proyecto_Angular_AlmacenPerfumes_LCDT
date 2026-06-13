import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaProveedor } from './pagina-proveedor';

describe('PaginaProveedor', () => {
  let component: PaginaProveedor;
  let fixture: ComponentFixture<PaginaProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaProveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaProveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
