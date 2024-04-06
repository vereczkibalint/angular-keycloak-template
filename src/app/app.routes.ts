import { Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './guards/auth.guard';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        pathMatch: 'full',
        canActivate: [authGuard]
    },
    {
        path: 'dashboard',
        component: PrivateComponent,
        pathMatch: 'full',
        canActivate: [authGuard]
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];
