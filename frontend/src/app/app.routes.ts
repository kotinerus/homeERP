import { Routes } from '@angular/router';
import { FoodProductsComponent } from './food-products/food-products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },

  {
    path: 'products',
    children: [
      { path: '', redirectTo: 'food', pathMatch: 'full' },

      { path: 'food', component: FoodProductsComponent },
      // { path: 'chemicals', component: ChemicalsComponent },
    ],
  },

  { path: '**', redirectTo: 'spizarnia' },
];
