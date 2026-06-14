import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Proveedor } from '../../interfaces/proveedor';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ModificarServiceProveedor {
    private BASEURL: string = 'http://localhost:3000'
    private http = inject(HttpClient);
    private url: string = `${this.BASEURL}/api/proveedores/updateProveedores`;
  
    modificarProveedor(proveedor: Proveedor): Observable<any> {
      return this.http.put(`${this.url}/${proveedor.id}`, proveedor);
    }
}
