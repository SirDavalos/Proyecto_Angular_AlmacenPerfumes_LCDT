import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarProveedor } from './eliminar';

describe('Eliminar', () => {
  let component: EliminarProveedor;
  let fixture: ComponentFixture<EliminarProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarProveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(EliminarProveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
