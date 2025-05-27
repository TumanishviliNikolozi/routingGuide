import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'test-page/:id',
        component: TestPageComponent
    },
    {
        path: 'test-page',
        component: TestPageComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
