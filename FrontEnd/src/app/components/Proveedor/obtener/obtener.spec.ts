import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obtener } from './obtener';

describe('Obtener', () => {
  let component: Obtener;
  let fixture: ComponentFixture<Obtener>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obtener],
    }).compileComponents();

    fixture = TestBed.createComponent(Obtener);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
