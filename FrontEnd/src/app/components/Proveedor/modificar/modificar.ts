import { CurrencyPipe } from '@angular/common';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ObtenerServiceProveedor } from '../../../services/Proveedor/obtener-service';
import { ModificarServiceProveedor } from '../../../services/Proveedor/modificar-service';
import { ActivatedRoute } from '@angular/router';
import { Proveedor } from '../../../interfaces/proveedor';
import { SearchResult } from '../../../interfaces/search-result';

@Component({
  selector: 'app-modificar',
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, CurrencyPipe],
  templateUrl: './modificar.html',
  styleUrl: './modificar.css',
})
export class ModificarProveedor {
  private obtenerDB = inject(ObtenerServiceProveedor);
  private modificarDB = inject(ModificarServiceProveedor);
  private cdr = inject (ChangeDetectorRef);
  private ruta = inject (ActivatedRoute);

  private readonly formBuilder = inject(FormBuilder);
  modificarForm: FormGroup = new FormGroup({});

  allSupplier: Array<Proveedor> = [];

  mensaje: string = '';
  selectedId: number | null = null;

  modID: number = 0;
  showMod: boolean = false;

  resulSearch: Proveedor | Proveedor[] | null = null;
  resIsArray: boolean = false;
  showRes: boolean = false;

  constructor(){
    this.loadObtener()
  }

  ngOnInit(): void {
    this.ruta.queryParamMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        const idURL = Number(idParam);
        if (!isNaN(idURL)) {
          this.selectedId = idURL;
          this.trySelect();
        }
      }
    });
  }

  trySelect() {
    if (this.selectedId !== null && this.allSupplier.length > 0) {
      this.selectModProv(this.selectedId);
    }
  }

  public selectModProv(id: number) {
    let modProveedor = this.allSupplier.find((prov) => prov.id == id);
    console.log(modProveedor);

    this.modID = id;

    this.modificarForm = this.formBuilder.group({
      nombre: [
        modProveedor!.nombre,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],

      correo: [
        modProveedor!.correo,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],

      telefono: [
        modProveedor!.telefono,
        [
          Validators.required,
          Validators.minLength(12),
          Validators.maxLength(20)
        ]
      ],
    });

    this.showMod = true;
    this.mensaje = '';
  }

  public onModify(id: number){
    let newProveedor: Proveedor = {
      id: this.modID,
      nombre: this.modificarForm.value.nombre,
      correo: this.modificarForm.value.correo,
      telefono: this.modificarForm.value.telefono
    };

    this.modificarDB.modificarProveedor(newProveedor).subscribe({
      next: (respuesta: any) => {
        this.mensaje = respuesta.mensaje;
        this.cdr.markForCheck();
        this.loadObtener();
        console.log(respuesta);
      },
      error: (error: any) => {
        console.error("Error al modificar producto: ", error);
      }
    });
  }

  public loadObtener(): void{
    this.obtenerDB.getDatos().subscribe({
      next: (respuesta: Proveedor[]) => {
        this.allSupplier = respuesta;
        this.cdr.markForCheck();
        this.trySelect();
        console.log("AllSupplier: ", this.allSupplier);
      },
      error: (error: any) => {
        console.error('Error al recuperar datos: ', error);
      }
    });
  }

  public showReultEvent(event: SearchResult){
    console.log("Llega output");

    if (event.show) {
      this.resulSearch = event.result!;
      this.showRes = true;

      if (Object.prototype.toString.call(this.resulSearch) === '[object Array]') {
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
    return this.resulSearch as Proveedor[];
  }

  get resultSearchSolo() {
    return this.resulSearch as Proveedor;
  }
}