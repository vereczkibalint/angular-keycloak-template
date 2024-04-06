import { Component, OnInit, signal } from '@angular/core';
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
export class AppComponent implements OnInit {
  
  userLoggedIn = signal<boolean>(false);

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    }
  ];

  constructor(private readonly keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.userLoggedIn.set(this.keycloakService.isLoggedIn());
  }

  login() {
    this.keycloakService.login({
      redirectUri: 'http://localhost:4200/private'
    });
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
