import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ObtenerService {
  private http = inject(HttpClient);
  private url: string = 'http://localhost:3000/api/perfumes/getPerfumes';
  private urlUno: string = 'http://localhost:3000/api/perfumes/obtenerPerfume';

  getDatos(): Observable<Perfume[]> {
    return this.http.get<Perfume[]>(this.url).pipe(
      map(response => response.map(item => ({
        id: item.id ?? 0,
        nombre: item.nombre ?? '',
        precio: item.precio ?? 0,
        cantidad: item.cantidad ?? 0,
        marca: item.marca ?? '',
        proveedor: item.proveedor ?? '',
        tipo: item.tipo ?? '',
        linea: item.linea ?? '',
        aroma_salida: item.aroma_salida ?? '',
        aroma_corazon: item.aroma_corazon ?? '',
        aroma_fondo: item.aroma_fondo ?? ''
      })))
    );
  }

  getDato(id: number): Observable<Perfume> {
    return this.http.get<Perfume>(`${this.urlUno}/${id}`).pipe(
      map(item => ({
        id: item.id ?? 0,
        nombre: item.nombre ?? '',
        precio: item.precio ?? 0,
        cantidad: item.cantidad ?? 0,
        marca: item.marca ?? '',
        proveedor: item.proveedor ?? '',
        tipo: item.tipo ?? '',
        linea: item.linea ?? '',
        aroma_salida: item.aroma_salida ?? '',
        aroma_corazon: item.aroma_corazon ?? '',
        aroma_fondo: item.aroma_fondo ?? ''
      })));
  }
}
