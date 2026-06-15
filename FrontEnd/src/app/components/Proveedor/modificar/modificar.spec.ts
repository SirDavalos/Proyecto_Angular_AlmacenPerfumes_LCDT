import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarProveedor } from './modificar';

describe('Modificar', () => {
  let component: ModificarProveedor;
  let fixture: ComponentFixture<ModificarProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModificarProveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(ModificarProveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
