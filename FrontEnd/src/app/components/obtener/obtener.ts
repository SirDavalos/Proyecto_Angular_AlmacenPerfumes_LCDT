import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ObtenerService } from '../../services/obtener-service';
import { Perfume } from '../../interfaces/perfume';
import { Filtro } from "../filtro/filtro";

@Component({
  selector: 'app-obtener',
  imports: [Filtro],
  templateUrl: './obtener.html',
  styleUrl: './obtener.css',
})
export class Obtener {
  private getAll = inject(ObtenerService);
  private cdr = inject(ChangeDetectorRef);

  TodProductos: Array<Perfume> = [];
  verTabla: boolean = false;

  mostrarTabla(): void {
    this.verTabla = true;
  }

  constructor() {
    this.getAll.getDatos().subscribe({
      next: (respuesta: Perfume[]) => {
        this.TodProductos = respuesta;
        this.cdr.markForCheck();
      },
      error: (error: any) => {
        console.error('Error al recuperar los datos', error);
      }
    });
  }
}
