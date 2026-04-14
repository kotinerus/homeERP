import { Component, signal } from '@angular/core';

import { MenuItem, PrimeIcons } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {SidebarPanel} from './sidebar-panel/sidebar-panel';


@Component({
  selector: 'app-root',
  imports: [PanelMenuModule, CommonModule, RouterModule, ButtonModule, SidebarPanel],
  templateUrl: './app.html',
})
export class App {
  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Magazyn',
        icon: 'pi pi-box',
        items: [
          {
            label: 'Produkty spożywcze',
            icon: 'pi pi-cherry',
          },
        ],
      },
      {
        label: 'Finanse',
        icon: 'pi pi-receipt',
        items: [
          {
            label: 'Zakupy',
            icon: 'pi pi-shopping-cart',
          },
        ],
      },
      {
        label: 'Dokumenty',
        icon: 'pi pi-file',
        items: [
          {
            label: 'Faktury',
            icon: 'pi pi-file-pdf',
          },
        ],
      },
      {
        label: 'Inne',
        icon: 'pi pi-ellipsis-h',
        items: [
          {
            label: 'Samochód',
            icon: 'pi pi-car',
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
