import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ObtenerServiceProveedor {
  private BASEURL: string = 'http://localhost:3000'
  private http = inject(HttpClient);
  private url: string = `${this.BASEURL}/api/proveedores/getProveedores`;
  private urlUno: string = `${this.BASEURL}/api/proveedores/obtenerProveedor`;

  getDatos(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.url).pipe(
      map(response => response.map(item => ({
        id: item.id ?? 0,
        nombre: item.nombre ?? '',
        correo: item.correo ?? '',
        telefono: item.telefono ?? ''
      })))
    );
  }

  getSoloDato(id: number): Observable<Proveedor> {
    return this.http.get<Proveedor>(`${this.urlUno}/${id}`).pipe(
      map(item => ({
        id: item.id ?? 0,
        nombre: item.nombre ?? '',
        correo: item.correo ?? '',
        telefono: item.telefono ?? ''
      })));
  }
}
