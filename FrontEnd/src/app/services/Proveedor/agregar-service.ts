import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AgregarServiceProveedor {
  private BASEURL: string = 'http://localhost:3000'
  private http = inject(HttpClient);
  private url: string = `${this.BASEURL}/api/proveedores/insertProveedor`;

  agregarPerfume(proveedor: Proveedor): Observable<any> {
    const { id, ...proveedorNuevo} = proveedor
    return this.http.post(this.url, proveedorNuevo);
  }
}