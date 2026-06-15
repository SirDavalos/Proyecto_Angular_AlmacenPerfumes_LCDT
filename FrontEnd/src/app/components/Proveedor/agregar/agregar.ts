import { Component, inject, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AgregarServiceProveedor } from '../../../services/Proveedor/agregar-service';
import { Proveedor } from '../../../interfaces/proveedor';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css',
})
export class AgregarProveedor {
  @ViewChild('proveedorForm') proveedorForm!: NgForm;
  private servicio = inject(AgregarServiceProveedor);

  proveedor: Proveedor = {
    id: 0,
    nombre: '',
    correo: '',
    telefono: ''
  };

  mensaje: string = '';

  agregarProveedor(): void {
    this.servicio.agregarProveedor(this.proveedor).subscribe({
      next: (respuesta) => {
        this.mensaje = respuesta.mensaje;

        this.proveedorForm.reset();

        this.proveedorForm.reset();

        this.proveedor = {
          id: 0,
          nombre: '',
          correo: '',
          telefono: ''
        };

        setTimeout(() => {
          this.mensaje = '';
        }, 3000);
      },
      error: (error) => {
        this.mensaje = 'Error al agregar proveedor';
        console.error(error);
        setTimeout(() => {
          this.mensaje = '';
        }, 3000);
      }
    });
  }
}
