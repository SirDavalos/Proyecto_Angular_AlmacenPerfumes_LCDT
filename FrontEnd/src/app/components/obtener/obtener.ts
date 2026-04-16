import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';
import { ObtenerService } from '../../services/obtener-service';
import { Perfume } from '../../interfaces/perfume';
import { SearchResult } from '../../interfaces/search-result';
import { Filtro } from "../filtro/filtro";
import { RouterLink } from "@angular/router";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-obtener',
  imports: [Filtro, RouterLink, CurrencyPipe],
  templateUrl: './obtener.html',
  styleUrl: './obtener.css',
})
export class Obtener {
  private getAll = inject(ObtenerService);
  private cdr = inject(ChangeDetectorRef);

  TodProductos: Array<Perfume> = [];

  // Estas son para resultado
  resultSearch: Perfume | Perfume[] | null = null;
  resIsArray: boolean = false;
  showRes: boolean = false;

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
