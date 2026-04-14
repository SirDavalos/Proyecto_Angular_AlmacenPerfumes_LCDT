import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormsModule, FormBuilder, FormArray, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Perfume } from '../../interfaces/perfume';
import { ObtenerService } from '../../services/obtener-service';
import { ModificarService } from '../../services/modificar-service';

@Component({
  selector: 'app-modificar',
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule],
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
  modID: number = 0;
  showMod: boolean = false;

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

  public selectModProd(id: number) {
    let modPerfume = this.allProduct.find((prod) => prod.id == id);

    this.modID = id;
    
    this.modificarForm = this.formBuilder.group({
      nombre: [modPerfume!.nombre, []],
      precio: [modPerfume!.precio, [Validators.min]],
      cantidad: [modPerfume!.cantidad, []],
      marca: [modPerfume!.marca, []],
      proveedor: [modPerfume!.proveedor, [Validators.required]],
      tipo: [modPerfume!.tipo, [Validators.required]],
      linea: [modPerfume!.linea, [Validators.required]],
      aroma_salida: [modPerfume!.aroma_salida, [Validators.required]],
      aroma_corazon: [modPerfume!.aroma_corazon, [Validators.required]],
      aroma_fondo: [modPerfume!.aroma_fondo, [Validators.required]],
    });

    this.showMod = true;
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

    this.modificarDB.modificarPerfume(newPerfume);

    console.log("enviado: ", newPerfume);
  }
}
