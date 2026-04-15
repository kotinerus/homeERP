import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PanelMenuModule } from 'primeng/panelmenu';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar-panel',
  standalone: true,
  imports: [PanelMenuModule, CommonModule, RouterModule, ButtonModule],
  templateUrl: './sidebar-panel.html',
  styles: ``,
})
export class SidebarPanel implements OnInit, OnDestroy {
  items: MenuItem[] = [];
  private langChangeSub!: Subscription;

  constructor(
    private readonly translate: TranslateService,
    private readonly cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    // Prosimy TYLKO o główny klucz 'SIDEBAR'
    this.langChangeSub = this.translate.stream('sidebar').subscribe((sidebar) => {
      if (!sidebar) return;

      this.items = [
        {
          label: sidebar.assets.title,
          icon: 'ph ph-package',
          items: [
            {
              label: sidebar.assets.stock,
              icon: 'ph ph-stack',
              routerLink: '/assets/stock',
            },
            {
              label: sidebar.assets.products,
              icon: 'ph ph-barcode',
              routerLink: 'assets/products',
            },
            {
              label: sidebar.assets.shopping_list,
              icon: 'ph ph-basket',
              routerLink: 'assets/shopping',
            },
            {
              label: sidebar.assets.wishlist,
              icon: 'ph ph-list-heart',
              routerLink: 'assets/wishlist',
            },
          ],
        },
        {
          label: sidebar.finances.title,
          icon: 'ph ph-credit-card',
          items: [
            {
              label: sidebar.finances.budget,
              icon: 'ph ph-money',
              routerLink: 'finances/budget',
            },
            {
              label: sidebar.finances.financial_report,
              icon: 'ph ph-chart-donut',
              routerLink: 'finances/reports',
            },
            {
              label: sidebar.finances.recurring_payments,
              icon: 'ph ph-repeat',
              routerLink: 'finances/cyclic-expenses',
            },
            {
              label: sidebar.finances.price_history,
              icon: 'ph ph-chart-line-up',
              routerLink: 'finances/price-history',
            },
          ],
        },
        {
          label: sidebar.documents.title,
          icon: 'ph ph-file-text',
          items: [
            {
              label: sidebar.documents.invoices,
              icon: 'ph ph-receipt',
            },
            {
              label: sidebar.documents.contracts,
              icon: 'ph ph-files',
            },
            {
              label: sidebar.documents.other,
              icon: 'ph ph-dots-three',
            },
          ],
        },
        {
          label: sidebar.community.title,
          icon: 'ph ph-check-circle',
          items: [
            {
              label: sidebar.community.friends,
              icon: 'ph ph-users',
            },
            {
              label: sidebar.community.groups,
              icon: 'ph ph-users-three',
            },
          ],
        },
        {
          label: sidebar.other.title,
          icon: 'ph ph-dots-three',
          items: [
            {
              label: sidebar.other.car,
              icon: 'ph ph-car-profile',
            },
            {
              label: sidebar.other.mega,
              icon: 'custom-icon-mega',
            },
          ],
        },
      ];

      this.cdr.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.langChangeSub) {
      this.langChangeSub.unsubscribe();
    }
  }
}
