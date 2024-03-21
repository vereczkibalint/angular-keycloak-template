import { KeycloakService } from "keycloak-angular";

export function initKeycloak(keycloakService: KeycloakService) {
    return async () => {
        await keycloakService.init({
            config: {
                url: 'http://localhost:8080',
                realm: 'angular-keycloak-template',
                clientId: 'angular-keycloak-template',
            },
            initOptions: {
                checkLoginIframe: false,
                enableLogging: true
            },
            loadUserProfileAtStartUp: true
        });
    }
}