import { Component, inject } from '@angular/core';
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
    this.servicio.agregarPerfume(this.producto);
    this.mensaje = 'Producto agregado correctamente';
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
  }
}