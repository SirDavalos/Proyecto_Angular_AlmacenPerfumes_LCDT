import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPerfume } from './pagina-perfume';

describe('PaginaPerfume', () => {
  let component: PaginaPerfume;
  let fixture: ComponentFixture<PaginaPerfume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPerfume],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginaPerfume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
