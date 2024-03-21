import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initKeycloak } from './config/keycloak.init';
import { KeycloakService } from 'keycloak-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: initKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    KeycloakService
  ]
};
