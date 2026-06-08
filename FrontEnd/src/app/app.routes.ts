import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Agregar } from './components/Perfume/agregar/agregar';
import { Obtener } from './components/Perfume/obtener/obtener';
import { PaginaPerfume } from './components/Perfume/pagina-perfume/pagina-perfume';
import { Modificar } from './components/Perfume/modificar/modificar';
import { Eliminar } from './components/Perfume/eliminar/eliminar';
import { NotFound } from './components/not-found/not-found';
import { ObtenerProveedor } from './components/Proveedor/obtener/obtener';
import { PaginaProveedor } from './components/Proveedor/pagina-proveedor/pagina-proveedor';
import { AgregarProveedor } from './components/Proveedor/agregar/agregar';

// const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        title: 'Inicio'
    },
    {
        path: 'perfumes/agregar',
        component: Agregar,
        title: 'Agregar nuevo Perfume'
    },
    {
        path: 'perfumes',
        component: Obtener,
        title: 'Viendo todo el Catálogo'
    },
    {
        path: 'perfumes/:id',
        component: PaginaPerfume,
        title: 'Viendo perfume particular'
    },
    {
        path: 'perfumes/modificar',
        component: Modificar
    },
    {
        path: 'perfumes/eliminar',
        component: Eliminar
    },
    {
        path: 'proveedores/agregar',
        component: AgregarProveedor,
        title: 'Agregar un nuevo proveedor'
    },
    {
        path: 'proveedores',
        component: ObtenerProveedor,
        title:'Viendo todos los proveedores'
    },
    {
        path: 'provedores/:id',
        component: PaginaProveedor,
        title: 'Viendo proveedor particular'
    },
    {
        path: '**',
        component: NotFound
    },
];
