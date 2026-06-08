import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class EliminarService {
  private BASEURL: string = 'http://localhost:3000'
  private http = inject(HttpClient);
  private url: string =`${this.BASEURL}/api/perfumes/borrarPerfume`;

  eliminarPerfume(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
