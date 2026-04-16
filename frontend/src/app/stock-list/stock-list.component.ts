import { Component, inject, OnInit } from '@angular/core';
import { Table, TableModule } from 'primeng/table';
import { SelectItem, MessageService } from 'primeng/api';
import { StockListService } from './stock-list.service';
import { PaginatorState } from 'primeng/paginator';
import { SelectModule } from 'primeng/select';

import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { Product } from './models/product.model';
import { UnitMeasurement } from './models/unit-measurment.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [
    SelectModule,
    IconFieldModule,
    InputIconModule,
    MultiSelectModule,
    TableModule,
    TagModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    TagModule,
    ToastModule,
    InputTextModule,
    RippleModule,
    FormsModule,
    TranslateModule,
  ],
  templateUrl: './stock-list.component.html',
})
export class StockListComponent implements OnInit {
  private readonly productService = inject(StockListService);

  loading: boolean = true;

  products!: Product[];
  unitMeasurementLabels!: UnitMeasurement[];
  statuses!: SelectItem[];

  rowsPerPageOptions!: number[];
  rows!: number;
  first: number = 0;

  private prepareRowsPerPageOptions(productsArrayLength: number): number[] {
    const preferredRowsPerPageOptions = [15, 20, 25];
    const finalizersPerPageOptions = preferredRowsPerPageOptions.filter(
      (x) => x <= productsArrayLength,
    );
    finalizersPerPageOptions.push(productsArrayLength);
    return finalizersPerPageOptions;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) => {
      this.products = products;
    });

    this.productService
      .getUnitMeasurment()
      .subscribe((unitMeasurementLabels: UnitMeasurement[]) => {
        this.unitMeasurementLabels = unitMeasurementLabels;
      });

    this.statuses = [
      { label: 'In Stock', value: 'INSTOCK' },
      { label: 'Low Stock', value: 'LOWSTOCK' },
      { label: 'Out of Stock', value: 'OUTOFSTOCK' },
    ];
    this.rowsPerPageOptions = this.prepareRowsPerPageOptions(this.products.length);
    this.rows = this.rowsPerPageOptions[0];
    this.loading = false;
  }

  next() {
    this.first = this.first + this.rows;
  }

  pageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 15;
  }

  protected getUnitShortName(product: Product): string {
    const unitMeasurementLabel = this.unitMeasurementLabels.find(
      (x) => x.id === product.unitMeasurement,
    );
    return unitMeasurementLabel?.longName ?? '';
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return null;
    }
  }
}
