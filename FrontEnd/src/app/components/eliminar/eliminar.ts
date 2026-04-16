import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Perfume } from '../../interfaces/perfume';
import { SearchResult } from '../../interfaces/search-result';
import { ObtenerService } from '../../services/obtener-service';
import { EliminarService } from '../../services/eliminar-service';
import { Filtro } from '../filtro/filtro';

@Component({
  selector: 'app-eliminar',
  imports: [CurrencyPipe, Filtro],
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css',
})

export class Eliminar {
  private obtenerDB = inject(ObtenerService);
  private eliminarDB = inject(EliminarService);
  private cdr = inject(ChangeDetectorRef);

  allProduct: Array<Perfume> = [];

  mensaje: string = '';

  // Estas son para resultado
  resultSearch: Perfume | Perfume[] | null = null;
  resIsArray: boolean = false;
  showRes: boolean = false;

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
        this.mensaje=respuesta;
      },
      error: (error: any) => {
        console.error('Error al borrar producto: ', error);
      }
    })
  }

  // Funciones para resultados
    public showResultEvent(event: SearchResult){
      console.log("Llega output");
  
      if(event.show){
        this.resultSearch = event.result!;
        this.showRes = true;
  
        if(Object.prototype.toString.call(this.resultSearch) === '[object Array]') {
          this.resIsArray = true;
          console.log("Es Array");
        } else {
          this.resIsArray = false;
        }
      } else {
        this.showRes = false;
      }
      
    }
  
    get resultSearchArray() {
      return this.resultSearch as Perfume[];
    }
  
    get resultSearchSolo () {
      return this.resultSearch as Perfume;
    }
}
