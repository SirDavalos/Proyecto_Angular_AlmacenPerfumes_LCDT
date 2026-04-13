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

  getDatos(): Observable<Perfume[]> {
    return this.http.get<Perfume[]>(this.url);
  }
}
