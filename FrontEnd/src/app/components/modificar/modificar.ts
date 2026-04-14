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
  modificarForm: FormGroup;

  allProduct: Array<Perfume> = [];

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
    
    this.modificarForm = this.formBuilder.group({
      nombre: ['', [Validators.required]]
    });
  }
  
}
