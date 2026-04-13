import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AgregarService {
  private http = inject(HttpClient);
  private url: string = 'http://localhost:3000/api/perfumes/insertPerfume';

  agregarPerfume(perfume: Perfume): Observable<any> {
    return this.http.post(this.url, perfume);
  }
}
