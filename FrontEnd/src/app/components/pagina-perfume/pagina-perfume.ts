import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Perfume } from '../../interfaces/perfume';
import { ModificarService } from '../../services/modificar-service';
import { EliminarService } from '../../services/eliminar-service';

@Component({
  selector: 'app-pagina-perfume',
  imports: [],
  templateUrl: './pagina-perfume.html',
  styleUrl: './pagina-perfume.css',
})
export class PaginaPerfume {
  perfumeID: number = 0;
  perfumeObtenido: Perfume;

  // Eliminar
  private eliminarDB = inject(EliminarService);

  // Modificar
  private modificarDB = inject(ModificarService);
  showMod: boolean = false;

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id');
      this.perfumeID = +idString!;
    });
  }

  // Servicio que obtiene los datos con la id

  // Modificar
  public onModify(id: number){
    let newPerfume: Perfume = {
      id: this.perfumeObtenido.id,
      nombre: this.perfumeObtenido.nombre,
      precio: this.perfumeObtenido.precio,
      cantidad: this.perfumeObtenido.cantidad,
      marca: this.perfumeObtenido.marca,
      proveedor: this.perfumeObtenido.proveedor,
      tipo: this.perfumeObtenido.tipo,
      linea: this.perfumeObtenido.linea,
      aroma_salida: this.perfumeObtenido.aroma_salida,
      aroma_corazon: this.perfumeObtenido.aroma_corazon,
      aroma_fondo: this.perfumeObtenido.aroma_fondo
    };

    this.modificarDB.modificarPerfume(newPerfume).subscribe({
      next: (respuesta: any) => {
        console.log(respuesta)
        this.mensaje = respuesta;
      },
      error: (error: any) => {
        console.error("Error al modificar producto: ", error);
      }
    });
  }
}
