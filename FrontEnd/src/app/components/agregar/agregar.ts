import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgregarService } from '../../services/agregar-service';
import { Perfume } from '../../interfaces/perfume';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})

export class Agregar {
  @ViewChild('productoForm') productoForm!: NgForm;
  private servicio = inject(AgregarService)

  producto: Perfume = {
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

  mensaje: string = '';

  agregarProducto(): void {
    this.servicio.agregarPerfume(this.producto).subscribe({
      next: (respuesta) => {
        this.mensaje = respuesta.mensaje;

        this.productoForm.reset();

        this.productoForm.reset();

        this.producto = {
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

        setTimeout(() => {
          this.mensaje = '';
        }, 5000);
      },
      error: (error) => {
        this.mensaje = 'Error al agregar producto';
        console.error(error);
        setTimeout(() => {
          this.mensaje = '';
        }, 3000);
      }
    });
  }
}