import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AgregarService {
  private http = inject(HttpClient);
  private url: string = 'https://proyecto-angular-almacenperfumes-lcdt.onrender.com/api/perfumes/insertPerfume';

  agregarPerfume(perfume: Perfume): Observable<any> {
    const { id, ...perfumeNuevo} = perfume
    return this.http.post(this.url, perfumeNuevo);
  }
}
