import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { Router, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initKeycloak } from './config/keycloak.init';
import { KeycloakBearerInterceptor, KeycloakService } from 'keycloak-angular';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { PrimeNGConfig } from 'primeng/api';
import { initPrimeNG } from './config/primeng.init';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    provideAnimations(),
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initPrimeNG,
      multi: true,
      deps: [PrimeNGConfig],
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useFactory: (router: Router) => {
        return new HttpErrorInterceptor(router);
      },
      multi: true,
      deps: [Router]
    },
    KeycloakService
  ]
};
