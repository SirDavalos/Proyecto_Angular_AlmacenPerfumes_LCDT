import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgregarService } from '../../services/agregar-service';
import { Perfume } from '../../interfaces/perfume';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class Agregar {
  private servicio = inject(AgregarService)

  //Signals
  datos = signal("Datos A agregar: ")
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

        this.datos.update((dato) => dato + this.producto);
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
        console.log(this.datos())
      },
      error: (error) => {
        this.mensaje = 'Error al agregar producto';
        console.error(error);
      }
    });
  }
}