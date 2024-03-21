import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-private',
  standalone: true,
  imports: [],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss'
})
export class PrivateComponent {
  constructor(private readonly keycloakService: KeycloakService) {}
  
  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
