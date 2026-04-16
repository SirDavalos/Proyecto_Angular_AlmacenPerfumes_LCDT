import { Routes } from '@angular/router';
import { Homepage } from './components/homepage/homepage';
import { Agregar } from './components/agregar/agregar';
import { Obtener } from './components/obtener/obtener';
import { PaginaPerfume } from './components/pagina-perfume/pagina-perfume';
import { Modificar } from './components/modificar/modificar';
import { Eliminar } from './components/eliminar/eliminar';
import { NotFound } from './components/not-found/not-found';

// const titleResolver: ResolveFn<string> = (route) => route.queryParams['id'];

export const routes: Routes = [
    {
        path: '',
        component: Homepage,
        title: 'Inicio'
    },
    {
        path: 'agregar',
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
        path: 'modificar',
        component: Modificar
    },
    {
        path: 'eliminar',
        component: Eliminar
    },
    {
        path: '**',
        component: NotFound
    },
];
