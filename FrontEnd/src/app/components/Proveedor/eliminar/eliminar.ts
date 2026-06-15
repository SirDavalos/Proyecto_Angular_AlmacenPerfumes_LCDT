import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ObtenerServiceProveedor } from '../../../services/Proveedor/obtener-service';
import { EliminarServiceProveedor } from '../../../services/Proveedor/eliminar-service';
import { Proveedor } from '../../../interfaces/proveedor';
import { SearchResult } from '../../../interfaces/search-result';

@Component({
  selector: 'app-eliminar',
  imports: [CurrencyPipe],
  templateUrl: './eliminar.html',
  styleUrl: './eliminar.css',
})
export class EliminarProveedor {
  private obtenerDB = inject(ObtenerServiceProveedor);
  private eliminarDB = inject(EliminarServiceProveedor);
  private cdr = inject(ChangeDetectorRef);

  allSupplier: Array<Proveedor> = [];

  mensaje: string = '';

  resultSearch: Proveedor | Proveedor[] | null = null;
  resIsArray: boolean =  false;
  showRes: boolean = false;

  constructor(){
    this.loadObtener()
  }

  public elimProv(id:number){
    this.eliminarDB.eliminarProveedor(id).subscribe({
      next: (respuesta: any) => {
        this.mensaje=respuesta.mensaje;
        this.cdr.markForCheck();
        this.loadObtener()
      },
      error: (error: any) => {
        console.error('Error al borrar proveedor: ', error);
      }
    });
  }

  public loadObtener(): void {
    this.obtenerDB.getDatos().subscribe({
      next: (respuesta: Proveedor[]) => {
        this.allSupplier = respuesta;
        this.cdr.markForCheck();
        console.log("AllSupplier: ", this.allSupplier);
      },
      error: (error: any) => {
        console.error('Error al recuperar los datos: ', error);
      }
    });
  }

  public showResultEvent(event: SearchResult){
    console.log("Llega output");
    if (event.show) {
      this.resultSearch = event.result!;
      this.showRes = true;

      if (Object.prototype.toString.call(this.resultSearch) === '[object Array]') {
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
    return this.resultSearch as Proveedor[];
  }

  get resultSearchSolo() {
    return this.resultSearch as Proveedor;
  }
}