import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'My services',
      icon: 'pi pi-tags'
    },
    {
      label: 'Coupons',
      icon: 'pi pi-gift'
    }
  ];

  constructor(private readonly keycloakService: KeycloakService) {}

  login() {
    this.keycloakService.login({
      redirectUri: 'http://localhost:4200/dashboard'
    });
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
