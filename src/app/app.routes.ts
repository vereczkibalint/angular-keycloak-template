import { Routes } from '@angular/router';
import { PrivateComponent } from './private/private.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'private',
        component: PrivateComponent,
        pathMatch: 'full',
        canActivate: [authGuard]
    }
];
