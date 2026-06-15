import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ObtenerServiceProveedor } from '../../../services/Proveedor/obtener-service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Proveedor } from '../../../interfaces/proveedor';
import { EliminarService } from '../../../services/Perfume/eliminar-service';
import { ModificarService } from '../../../services/Perfume/modificar-service';

@Component({
  selector: 'app-pagina-proveedor',
  imports: [ReactiveFormsModule, CurrencyPipe],
  templateUrl: './pagina-proveedor.html',
  styleUrl: './pagina-proveedor.css',
})
export class PaginaProveedor {
  private obtenerDB = inject(ObtenerServiceProveedor);
  cdr = inject(ChangeDetectorRef);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  proveedorID: number = 0;
  proveedorObtenido: Proveedor = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: ''
  };
  loadedPer: boolean = false;
  mensaje: string = '';

  // Eliminar
  private eliminarDB = inject(EliminarService);

  // Modificar
  private modificarDB = inject(ModificarService);
  private readonly formBuilder = inject(FormBuilder);
  modificarForm: FormGroup   = new FormGroup({});

  constructor() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let idString = params.get('id');
      this.proveedorID = +idString!;
    });

    // Servicio que obtiene los datos con la id
    /*this.obtenerDB.getDato(this.proveedorID).subscribe({
      next: (respuesta: Proveedor) => {
        this.proveedorObtenido = respuesta;
        this.cdr.markForCheck();
        this.loadedPer = true;
      },
      error: (error: any) => {
        console.error('Error al recuperar datos: ', error);
      }
    });*/
  }

  // Modificar
  /*public selectModProd() {
    this.modificarForm = this.formBuilder.group({
      nombre: [this.proveedorObtenido!.nombre, []],
      precio: [this.proveedorObtenido!.precio, [Validators.min]],
      cantidad: [this.proveedorObtenido!.cantidad, []],
      marca: [this.proveedorObtenido!.marca, []],
      proveedor: [this.proveedorObtenido!.proveedor, [Validators.required]],
      tipo: [this.proveedorObtenido!.tipo, [Validators.required]],
      linea: [this.proveedorObtenido!.linea, [Validators.required]],
      aroma_salida: [this.proveedorObtenido!.aroma_salida, [Validators.required]],
      aroma_corazon: [this.proveedorObtenido!.aroma_corazon, [Validators.required]],
      aroma_fondo: [this.proveedorObtenido!.aroma_fondo, [Validators.required]],
    });

    this.mensaje = '';
  }

  public onModify(){
    let newproveedor: proveedor = {
      id: this.proveedorObtenido.id,
      nombre: this.proveedorObtenido.nombre,
      precio: this.proveedorObtenido.precio,
      cantidad: this.proveedorObtenido.cantidad,
      marca: this.proveedorObtenido.marca,
      proveedor: this.proveedorObtenido.proveedor,
      tipo: this.proveedorObtenido.tipo,
      linea: this.proveedorObtenido.linea,
      aroma_salida: this.proveedorObtenido.aroma_salida,
      aroma_corazon: this.proveedorObtenido.aroma_corazon,
      aroma_fondo: this.proveedorObtenido.aroma_fondo
    };

    this.modificarDB.modificarproveedor(newproveedor).subscribe({
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
    this.eliminarDB.eliminarproveedor(this.proveedorID).subscribe({
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
      queryParams: { id: this.proveedorObtenido.id }
    });
  }*/
}
