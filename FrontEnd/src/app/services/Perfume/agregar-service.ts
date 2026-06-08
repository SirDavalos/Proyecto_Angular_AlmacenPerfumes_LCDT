import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AgregarService {
  private BASEURL: string = 'http://localhost:3000'
  private http = inject(HttpClient);
  private url: string = `${this.BASEURL}/api/perfumes/insertPerfume`;

  agregarPerfume(perfume: Perfume): Observable<any> {
    const { id, ...perfumeNuevo} = perfume
    return this.http.post(this.url, perfumeNuevo);
  }
}
