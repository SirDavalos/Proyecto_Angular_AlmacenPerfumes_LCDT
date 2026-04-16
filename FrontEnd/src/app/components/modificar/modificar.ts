import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule, FormBuilder, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CurrencyPipe } from '@angular/common';
import { Perfume } from '../../interfaces/perfume';
import { SearchResult } from '../../interfaces/search-result';
import { ObtenerService } from '../../services/obtener-service';
import { ModificarService } from '../../services/modificar-service';
import { Filtro } from '../filtro/filtro';

@Component({
  selector: 'app-modificar',
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, CurrencyPipe, Filtro],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})

export class Modificar {
  private obtenerDB = inject(ObtenerService);
  private modificarDB = inject(ModificarService);
  private cdr = inject(ChangeDetectorRef);

  // Form Reactive para preguntar que quiere modificar
  private readonly formBuilder = inject(FormBuilder);
  modificarForm: FormGroup = new FormGroup({});

  allProduct: Array<Perfume> = [];

  mensaje: string = '';
  
  // Estas son para modificar
  modID: number = 0;
  showMod: boolean = false;

  // Estas son para resultado
  resultSearch: Perfume | Perfume[] | null = null;
  resIsArray: boolean = false;
  showRes: boolean = false;

  constructor(){
    this.obtenerDB.getDatos().subscribe({
      next: (respuesta: Perfume[]) => {
        this.allProduct = respuesta;
        this.cdr.markForCheck();
        console.log("AllProduct: ",this.allProduct);
      },
      error: (error: any) => {
        console.error('Error al recuperar datos: ', error);
      }
    });
  }

  /*Información de los validators:
    -required: asegura que el campo no este vacio.
    -minLength: asegura la longitud minima de caracteres que se deben de poner en un campo.
    -maxLength: asegura la longitud maxima de caracteres que se deben de poner en un campo.
    -min: para que el valor numerico del campo sea mayor al indicado.
    -max: para que el valor nuerico del campo sea menor al indicado.
      *Nota: los ultimos dos funcinan como un rango para los numeros.
    -pattern('^[a-zA-Z ]+$'): */

  public selectModProd(id: number) {
    let modPerfume = this.allProduct.find((prod) => prod.id == id);

    this.modID = id;
    
    this.modificarForm = this.formBuilder.group({
    nombre: [
      modPerfume!.nombre,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]
    ],

    precio: [
      modPerfume!.precio,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(10000)
      ]
    ],

    cantidad: [
      modPerfume!.cantidad,
      [
        Validators.required,
        Validators.min(1),
        Validators.max(500)
      ]
    ],

    marca: [
      modPerfume!.marca,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z ]+$')
      ]
    ],

    proveedor: [
      modPerfume!.proveedor,
      [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40)
      ]
    ],

    tipo: [
      modPerfume!.tipo,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]+$')
      ]
    ],

    linea: [
      modPerfume!.linea,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ]
    ],

    aroma_salida: [
      modPerfume!.aroma_salida,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
    ],

    aroma_corazon: [
      modPerfume!.aroma_corazon,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z ]+$')
      ]
    ],

    aroma_fondo: [
      modPerfume!.aroma_fondo,
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(25)
      ]
    ],
  });

    this.showMod = true;
    this.mensaje = '';
  }
  
  public onModify(id: number){
    let newPerfume: Perfume = {
      id: this.modID,
      nombre: this.modificarForm.value.nombre,
      precio: this.modificarForm.value.precio,
      cantidad: this.modificarForm.value.cantidad,
      marca: this.modificarForm.value.marca,
      proveedor: this.modificarForm.value.proveedor,
      tipo: this.modificarForm.value.tipo,
      linea: this.modificarForm.value.linea,
      aroma_salida: this.modificarForm.value.aroma_salida,
      aroma_corazon: this.modificarForm.value.aroma_corazon,
      aroma_fondo: this.modificarForm.value.aroma_fondo
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
  // Funciones para resultados
  
  public showResultEvent(event: SearchResult){
    console.log("Llega output");

    if(event.show){
      this.resultSearch = event.result!;
      this.showRes = true;

      if(Object.prototype.toString.call(this.resultSearch) === '[object Array]') {
        this.resIsArray = true;
        console.log("Es Array");
      } else {
        this.resIsArray = false;
      }
    } else {
      this.showRes = false;
    }
    
  }

  get resultSearchArray() {
    return this.resultSearch as Perfume[];
  }

  get resultSearchSolo () {
    return this.resultSearch as Perfume;
  }
}
