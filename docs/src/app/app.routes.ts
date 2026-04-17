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
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT',
        component: Homepage,
        title: 'Inicio'
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/agregar',
        component: Agregar,
        title: 'Agregar nuevo Perfume'
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/perfumes',
        component: Obtener,
        title: 'Viendo todo el Catálogo'
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/perfumes/:id',
        component: PaginaPerfume,
        title: 'Viendo perfume particular'
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/modificar',
        component: Modificar
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/eliminar',
        component: Eliminar
    },
    {
        path: '/Proyecto_Angular_AlmacenPerfumes_LCDT/**',
        component: NotFound
    },
];
