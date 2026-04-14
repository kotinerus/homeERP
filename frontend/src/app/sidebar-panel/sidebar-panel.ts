import { Component, OnInit, signal } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-sidebar-panel',
  imports: [PanelMenuModule, CommonModule, RouterModule, ButtonModule],
  templateUrl: './sidebar-panel.html',
  styles: ``,
})
export class SidebarPanel implements OnInit {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Produkty',
        icon: 'ph ph-barcode',
        items: [
          {
            label: 'Magazyn',
            icon: 'ph ph-stack',
          },
          {
            label: 'Lista zakupów',
            icon: 'ph ph-basket',
          },
          {
            label: 'Lsita życzeń',
            icon: 'ph ph-list-heart',
          },
        ],
      },
      {
        label: 'Finanse',
        icon: 'ph ph-credit-card',
        items: [
          {
            label: 'Raport finansowy',
            icon: 'ph ph-chart-donut',
          },
          {
            label: 'Płatności cykliczne',
            icon: 'ph ph-repeat',
          },
          {
            label: 'Historia cen',
            icon: 'ph ph-chart-line-up',
          },
        ],
      },
      {
        label: 'Dokumenty',
        icon: 'ph ph-file-text',
        items: [
          {
            label: 'Faktury',
            icon: 'ph ph-receipt',
          },
          {
            label: 'Umowy',
            icon: 'ph ph-files',
          },
          {
            label: 'Inne',
            icon: 'ph ph-dots-three',
          },
        ],
      },
      {
        label: 'Społeczność',
        icon: 'ph ph-check-circle',
        items: [
          {
            label: 'Znajomi',
            icon: 'ph ph-users',
          },
          {
            label: 'Grupy',
            icon: 'ph ph-users-three',
          },
        ],
      },
      {
        label: 'Inne',
        icon: 'ph ph-dots-three',
        items: [
          {
            label: 'Samochód',
            icon: 'ph ph-car-profile',
          },
          {
            label: 'MEGA',
            icon: 'custom-icon-mega',
          },
        ],
      },
    ];
  }
}
