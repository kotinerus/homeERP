import { Routes } from '@angular/router';
import { StockListComponent } from './stock-list/stock-list.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReportsComponent } from './reports/reports.component';
import { CyclicExpensesComponent } from './cyclic-expenses/cyclic-expenses.component';
import { PriceHistoryComponent } from './price-history/price-history.component';
import { BudgetComponent } from './budget/budget.component';

export const routes: Routes = [
  { path: '', redirectTo: 'assets', pathMatch: 'full' },

  {
    path: 'assets',
    children: [
      { path: '', redirectTo: 'stock', pathMatch: 'full' },
      { path: 'stock', component: StockListComponent },
      { path: 'products', component: ProductsListComponent },
      { path: 'shopping', component: ShoppingListComponent },
      { path: 'wishlist', component: WishlistComponent },
    ],
  },
  {
    path: 'finances',
    children: [
      { path: '', redirectTo: 'budget', pathMatch: 'full' },
      { path: 'budget', component: BudgetComponent },
      { path: 'reports', component: ReportsComponent },
      { path: 'cyclic-expenses', component: CyclicExpensesComponent },
      { path: 'price-history', component: PriceHistoryComponent },
    ],
  },
  { path: '**', redirectTo: 'assets' },
];
