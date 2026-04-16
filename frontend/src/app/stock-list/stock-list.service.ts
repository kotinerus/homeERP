import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './models/product.model';
import { products } from './mocks/MOCK_PRODUCT_DATA';
import { unitMeasurements } from './mocks/MOCK_UNIT_MEASUREMENT_DATA';
import { UnitMeasurement } from './models/unit-measurment.model';

@Injectable({
  providedIn: 'root',
})
export class StockListService {
  getProducts(): Observable<Product[]> {
    return of(products);
  }

  getUnitMeasurment(): Observable<UnitMeasurement[]> {
    return of(unitMeasurements);
  }
}
