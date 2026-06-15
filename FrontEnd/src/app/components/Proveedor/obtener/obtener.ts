import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ObtenerServiceProveedor } from '../../../services/Proveedor/obtener-service';
import { Proveedor } from '../../../interfaces/proveedor';
import { SearchResult } from '../../../interfaces/search-result';

@Component({
  selector: 'app-obtener',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './obtener.html',
  styleUrl: './obtener.css',
})
export class ObtenerProveedor {
  private getAll = inject(ObtenerServiceProveedor);
  private cdr = inject(ChangeDetectorRef);

  AllProveed: Array<Proveedor> = [];

  //para el resultado
  resultSearch: Proveedor | Proveedor[] | null = null;
  resIsArray: boolean = false;
  showRes: boolean = false;

  constructor() { 
    this.getAll.getDatos().subscribe({
      next: (respuesta: Proveedor[]) => {
        this.AllProveed = respuesta;
        this.cdr.markForCheck();
      },
      error: (error: any) =>{
        console.error('Error al recuperar datos', error);
      }
    });
  }

  //Funciones para resultados
  public showResultEvent(event: SearchResult){
    console.log("Llega output");

    if(event.show){
      this.resultSearch = event.result!;
      this.showRes = true;

      if (Object.prototype.toString.call(this.resultSearch) === '[Object Array]') {
        this.resIsArray = true;
        console.log("Es Array");
      } else {
        this.resIsArray = false;
      }
    } else {
      this.showRes = false;
    }
  }

  get resultSearchArray(){
    return this.resultSearch as Proveedor[];
  }

  get resultSearchSolo() { 
    return this.resultSearch as Proveedor;
  }
}