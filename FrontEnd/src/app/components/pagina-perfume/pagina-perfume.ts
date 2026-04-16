import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Perfume } from '../../interfaces/perfume';

@Component({
  selector: 'app-pagina-perfume',
  imports: [],
  templateUrl: './pagina-perfume.html',
  styleUrl: './pagina-perfume.css',
})
export class PaginaPerfume {
  perfumeID: number = 0;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id');
      this.perfumeID = +idString!;
    });
  }

  // Servicio que obtiene los datos con la id
}
