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

  irPagina(): void {
    this.router.navigate(['/agregar']);
    this.router.navigate(['/perfumes'])
  }
}