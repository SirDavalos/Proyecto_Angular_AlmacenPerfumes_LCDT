import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Perfume } from '../interfaces/perfume';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ModificarService {
  private http = inject(HttpClient);
  private url: string = 'http://localhost:3000/api/perfumes/actualizarPerfume';

  modificarPerfume(perfume: Perfume): Observable<any> {
    console.log('Acceder Modify Service', perfume);
    return this.http.put(`${this.url}/:${perfume.id}`, perfume);
  }
}
