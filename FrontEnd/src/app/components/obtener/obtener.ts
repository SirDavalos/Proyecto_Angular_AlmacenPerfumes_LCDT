import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
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
  //verTabla: boolean = false;
  verTabla = signal(false);
  mostrarTabla(): void {
    //this.verTabla = true;
    console.log("Estado de tabla: " + this.verTabla());
    this.verTabla.set(true);
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
