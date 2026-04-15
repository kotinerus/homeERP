import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class StockListService {
  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  private products: Product[] = [
    { code: 'SPO-001', name: 'Mleko 3.2%', category: 'Spożywcze', quantity: 4 },
    { code: 'SPO-002', name: 'Kawa ziarnista 1kg', category: 'Spożywcze', quantity: 2 },
    { code: 'SPO-003', name: 'Chleb tostowy', category: 'Spożywcze', quantity: 1 },
    { code: 'SPO-004', name: 'Makaron Penne', category: 'Spożywcze', quantity: 5 },
    { code: 'SPO-005', name: 'Pomidory w puszce', category: 'Spożywcze', quantity: 6 },
    { code: 'SPO-006', name: 'Olej rzepakowy', category: 'Spożywcze', quantity: 2 },
    { code: 'SPO-007', name: 'Woda gazowana 1.5L', category: 'Spożywcze', quantity: 12 },
    { code: 'SPO-008', name: 'Cukier biały', category: 'Spożywcze', quantity: 3 },
    { code: 'CHM-001', name: 'Tabletki do zmywarki', category: 'Chemia domowa', quantity: 60 },
    { code: 'CHM-002', name: 'Płyn do naczyń', category: 'Chemia domowa', quantity: 1 },
    { code: 'CHM-003', name: 'Proszek do prania 3kg', category: 'Chemia domowa', quantity: 1 },
    { code: 'CHM-004', name: 'Worki na śmieci 60L', category: 'Chemia domowa', quantity: 10 },
    { code: 'CHM-005', name: 'Ręcznik papierowy', category: 'Chemia domowa', quantity: 8 },
    { code: 'NAR-001', name: 'Baterie AA', category: 'Narzędzia i sprzęt', quantity: 12 },
    { code: 'NAR-002', name: 'Żarówka LED E27', category: 'Narzędzia i sprzęt', quantity: 4 },
    { code: 'NAR-003', name: 'Taśma izolacyjna', category: 'Narzędzia i sprzęt', quantity: 2 },
    { code: 'BIU-001', name: 'Papier do drukarki A4', category: 'Biuro', quantity: 1 },
    { code: 'BIU-002', name: 'Czarny tusz do drukarki', category: 'Biuro', quantity: 2 },
    { code: 'ZWI-001', name: 'Karma dla psa 15kg', category: 'Dla zwierząt', quantity: 1 },
    { code: 'ZWI-002', name: 'Żwirek dla kota', category: 'Dla zwierząt', quantity: 2 },
    { code: 'ZWI-003', name: 'Maty dla psa', category: 'Dla zwierząt', quantity: 2 },
  ];
}
