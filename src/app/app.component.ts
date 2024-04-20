import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenubarModule, ButtonModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  themeOptions: string[] = [
    'lara-light-teal',
    'lara-dark-teal'
  ];
  selectedTheme: string | undefined = this.themeOptions[0];

  selectTheme(theme: DropdownChangeEvent) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if(themeLink) {
      themeLink.href = theme.value + '.css';
      this.selectedTheme = theme.value;
    }
  }

  items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: 'dashboard'
    },
    {
      label: 'My services',
      icon: 'pi pi-tags',
      routerLink: 'services'
    },
    {
      label: 'Coupons',
      icon: 'pi pi-gift',
      routerLink: 'coupons'
    }
  ];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private readonly keycloakService: KeycloakService
  ) {}

  login() {
    this.keycloakService.login({
      redirectUri: 'http://localhost:4200/dashboard'
    });
  }

  logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
