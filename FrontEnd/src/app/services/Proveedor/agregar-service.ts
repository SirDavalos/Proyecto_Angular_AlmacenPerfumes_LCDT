import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AgregarServiceProveedor {
  private http = inject(HttpClient);
  private url: string = 'https://proyecto-angular-almacenperfumes-lcdt.onrender.com/api/proveedores/insertProveedor';

  agregarProveedor(proveedor: Proveedor): Observable<any> {
    const { id, ...proveedorNuevo} = proveedor
    return this.http.post(this.url, proveedorNuevo);
  }
}