import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtenerProveedor } from './obtener';

describe('ObtenerProveedor', () => {
  let component: ObtenerProveedor;
  let fixture: ComponentFixture<ObtenerProveedor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObtenerProveedor],
    }).compileComponents();

    fixture = TestBed.createComponent(ObtenerProveedor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
