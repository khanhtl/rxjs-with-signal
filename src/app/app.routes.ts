import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'product',
        loadComponent: () => import('./product/product.component')
    },
    {
        path: 'detail/:id',
        loadComponent: () => import('./detail/detail.component')
    },
    {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
    }
];
