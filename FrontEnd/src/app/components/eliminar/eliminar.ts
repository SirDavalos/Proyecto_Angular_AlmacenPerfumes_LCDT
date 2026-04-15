import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Perfume } from '../../interfaces/perfume';
import { ObtenerService } from '../../services/obtener-service';
import { EliminarService } from '../../services/eliminar-service';

@Component({
  selector: 'app-eliminar',
  imports: [],
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css',
})

export class Eliminar {
  private obtenerDB = inject(ObtenerService);
  private eliminarDB = inject(EliminarService);
  private cdr = inject(ChangeDetectorRef);

  allProduct: Array<Perfume> = [];

  constructor(){
    this.obtenerDB.getDatos().subscribe({
      next: (respuesta: Perfume[]) => {
        this.allProduct = respuesta;
        this.cdr.markForCheck();
      },
      error: (error: any) => {
        console.error('Error al recuperar datos: ', error);
      }
    });
  }

  elimProd(id:number){
    this.eliminarDB.eliminarPerfume(id).subscribe({
      next: (respuesta: any) =>{
        console.log(respuesta);
      },
      error: (error: any) => {
        console.error('Error al borrar producto: ', error);
      }
    })
  }
}
