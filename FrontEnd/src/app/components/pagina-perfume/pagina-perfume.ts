import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Perfume } from '../../interfaces/perfume';
import { ObtenerService } from '../../services/obtener-service';
import { ModificarService } from '../../services/modificar-service';
import { EliminarService } from '../../services/eliminar-service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-pagina-perfume',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './pagina-perfume.html',
  styleUrl: './pagina-perfume.css',
})

export class PaginaPerfume {
  private obtenerDB = inject(ObtenerService);
  cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  perfumeID: number = 0;
  perfumeObtenido: Perfume = {
    id: 0,
    nombre: '',
    precio: 0,
    cantidad: 0,
    marca: '',
    proveedor: '',
    tipo: '',
    linea: '',
    aroma_salida: '',
    aroma_corazon: '',
    aroma_fondo: ''
  };
  loadedPer: boolean = false;
  mensaje: string = '';

  // Eliminar
  private eliminarDB = inject(EliminarService);

  // Modificar
  private modificarDB = inject(ModificarService);
  private readonly formBuilder = inject(FormBuilder);
  modificarForm: FormGroup = new FormGroup({});
  showMod: boolean = false;

  constructor() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id');
      this.perfumeID = +idString!;
    });

    // Servicio que obtiene los datos con la id
    this.obtenerDB.getDato(this.perfumeID).subscribe({
      next: (respuesta: Perfume) => {
        this.perfumeObtenido = respuesta;
        this.cdr.markForCheck();
        this.loadedPer = true;
      },
      error: (error: any) => {
        console.error('Error al recuperar datos: ', error);
      }
    });
  }

  // Modificar
  public selectModProd() {
    this.modificarForm = this.formBuilder.group({
      nombre: [this.perfumeObtenido!.nombre, []],
      precio: [this.perfumeObtenido!.precio, [Validators.min]],
      cantidad: [this.perfumeObtenido!.cantidad, []],
      marca: [this.perfumeObtenido!.marca, []],
      proveedor: [this.perfumeObtenido!.proveedor, [Validators.required]],
      tipo: [this.perfumeObtenido!.tipo, [Validators.required]],
      linea: [this.perfumeObtenido!.linea, [Validators.required]],
      aroma_salida: [this.perfumeObtenido!.aroma_salida, [Validators.required]],
      aroma_corazon: [this.perfumeObtenido!.aroma_corazon, [Validators.required]],
      aroma_fondo: [this.perfumeObtenido!.aroma_fondo, [Validators.required]],
    });

    this.showMod = true;
    this.mensaje = '';
  }

  public onModify(){
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

  // Eliminar
  elimProd(){
    this.eliminarDB.eliminarPerfume(this.perfumeID).subscribe({
      next: (respuesta: any) =>{
        console.log(respuesta);
        this.mensaje=respuesta;
      },
      error: (error: any) => {
        console.error('Error al borrar producto: ', error);
      }
    })
  }

  goModificar(){
    this.router.navigate(['/modificar'], {
      queryParams: { id: this.perfumeObtenido.id }
    });
  }
}
