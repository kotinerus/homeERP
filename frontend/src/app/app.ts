import { Component, signal } from '@angular/core';

import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarPanel } from './sidebar-panel/sidebar-panel';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [PanelMenuModule, CommonModule, RouterModule, ButtonModule, SidebarPanel],
  templateUrl: './app.html',
})
export class App {
  constructor(private readonly translate: TranslateService) {
    this.translate.addLangs(['pl', 'en']);
    this.translate.use('pl');
  }
}
