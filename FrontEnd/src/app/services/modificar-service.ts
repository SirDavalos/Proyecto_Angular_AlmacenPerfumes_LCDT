import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ModificarService {
  private http = inject(HttpClient);
  private url: string = 'https://proyecto-angular-almacenperfumes-lcdt.onrender.com/api/perfumes/actualizarPerfume';

  modificarPerfume(perfume: Perfume): Observable<any> {
    return this.http.put(`${this.url}/${perfume.id}`, perfume);
  }
}
