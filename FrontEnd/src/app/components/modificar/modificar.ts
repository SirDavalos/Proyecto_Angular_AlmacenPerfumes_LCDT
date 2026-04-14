import { Component, inject, signal } from '@angular/core';
import { FormsModule, FormBuilder, FormArray, ReactiveFormsModule } from '@angular/forms';
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
  // Form Reactive para preguntar que quiere modificar
  private readonly formBuilder = inject(FormBuilder);

  // Checkboxes
  readonly toModificar = this.formBuilder.group({
    nombre: false,
    precio: false,
    cantidad: false,
    marca: false,
    proveedor: false,
    tipo: false,
    linea: false,
    aroma: false
  });

  //Signals
  signalMod = signal("Valor: ");

  // Form Reactive con Array (para que pueda tener las opciones necesarias)
  formArray = this.formBuilder.array([]);
  formArrayNombre: Array<string> = [];

  modificarForm = this.formBuilder.group({
    opciones: this.formArray
  });

  // Agregar opciones segun los checkbox
  public submitToMod(){
    // Elimina lo que había anteriormente
    while(this.formArray.length !== 0){
      this.formArrayNombre.pop();
      this.formArray.removeAt(0);
    }

    if(this.toModificar.value.nombre){
      this.signalMod.update((valor) => valor += ", Nombre");
      this.formArrayNombre.push("Nombre");
      this.formArray.push(this.formBuilder.control(''));
    }
    if(this.toModificar.value.precio){
      this.signalMod.update((valor) => valor += ", precio");
      this.formArrayNombre.push("Precio");
      this.formArray.push(this.formBuilder.control(0));
    }
    if(this.toModificar.value.cantidad){
      this.signalMod.update((valor) => valor += ", cantidad");
      this.formArrayNombre.push("Cantidad");
      this.formArray.push(this.formBuilder.control(0));
    }
    if(this.toModificar.value.marca){
      this.signalMod.update((valor) => valor += ", marca");
      this.formArrayNombre.push("Marca");
      this.formArray.push(this.formBuilder.control(''));
    }
    if(this.toModificar.value.proveedor){
      this.signalMod.update((valor) => valor += ", proveedor");
      this.formArrayNombre.push("Proveedor");
      this.formArray.push(this.formBuilder.control(''));
    }
    if(this.toModificar.value.tipo){
      this.signalMod.update((valor) => valor += ", tipo");
      this.formArrayNombre.push("Tipo");
      this.formArray.push(this.formBuilder.control(''));
    }
    if(this.toModificar.value.linea){
      this.signalMod.update((valor) => valor += ", linea");
      this.formArrayNombre.push("Línea");
      this.formArray.push(this.formBuilder.control(''));
    }
    if(this.toModificar.value.aroma){
      this.signalMod.update((valor) => valor += ", aroma");
      this.formArrayNombre.push("Aroma");
      this.formArray.push(this.formBuilder.control(''));
    }

    console.log(this.formArrayNombre);
    console.log(this.formArray);
    console.log("Valores a modificar: ", this.signalMod());
  }

  // Recupera el Array de Opciones para el HTML
  get opciones() {
    return this.modificarForm.get('opciones') as FormArray;
  }
}
