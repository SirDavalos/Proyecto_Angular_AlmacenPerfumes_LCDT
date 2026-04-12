import { Component, inject } from '@angular/core';
import { FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Perfume } from '../../interfaces/perfume';

@Component({
  selector: 'app-modificar',
  imports: [],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})
export class Modificar {
  // Form Reactive con Array (para que pueda tener las opciones necesarias)
  private formBuilder = inject(FormBuilder);

  formArray = this.formBuilder.array([]);

  modificarForm = this.formBuilder.group({
    opciones: this.formArray
  });

  // Recupera el Array de Opciones para el HTML
  get opciones() {
    return this.modificarForm.get('opciones') as FormArray;
  }
}
