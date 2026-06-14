import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EliminarServiceProveedor {
  private BASEURL: string = 'http://localhost:3000'
  private http = inject(HttpClient);
  private url: string =`${this.BASEURL}/api/proveedores/borrarProveedor`;

  eliminarProveedor(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
