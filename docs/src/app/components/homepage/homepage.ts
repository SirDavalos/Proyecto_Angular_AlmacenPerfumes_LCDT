import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {
  private router = inject(Router);

  irAgregar(): void {
    this.router.navigate(['/Proyecto_Angular_AlmacenPerfumes_LCDT/agregar']);
  }

  irObtener(): void {
    this.router.navigate(['/Proyecto_Angular_AlmacenPerfumes_LCDT/perfumes']);
  }
}