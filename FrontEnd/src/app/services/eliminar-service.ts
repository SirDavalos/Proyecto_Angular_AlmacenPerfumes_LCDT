import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class EliminarService {
  private http = inject(HttpClient);
  private url: string = 'https://proyecto-angular-almacenperfumes-lcdt.onrender.com/api/perfumes/borrarPerfume';

  eliminarPerfume(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
