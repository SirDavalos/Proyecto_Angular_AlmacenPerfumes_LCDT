import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Agregar } from './components/agregar/agregar';
import { Obtener } from './components/obtener/obtener';
import { Modificar } from './components/modificar/modificar';
import { Eliminar } from './components/eliminar/eliminar';


export const routes: Routes = [
    {
        path: '',
        component: Homepage
    },
    {
        path: 'agregar',
        component: Agregar
    },
    {
        path: 'perfumes',
        component: Obtener
    },
    {
        path: 'modificar',
        component: Modificar
    },
    {
        path: 'eliminar',
        component: Eliminar
    }
];
