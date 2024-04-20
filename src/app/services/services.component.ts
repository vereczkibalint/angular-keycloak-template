import { Component, OnInit, inject } from '@angular/core';
import { ServicesService } from './services.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent implements OnInit {
  servicesService = inject(ServicesService);
  services$!: Observable<any>;

  ngOnInit(): void {
    this.services$ = this.servicesService.getAll();
  }

}
