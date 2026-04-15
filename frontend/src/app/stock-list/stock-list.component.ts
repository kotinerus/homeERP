import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product, StockListService } from './stock-list.service';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [TableModule],
  templateUrl: './stock-list.component.html',
})
export class StockListComponent implements OnInit {
  private productService = inject(StockListService);

  products!: Product[];
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
    this.rowsPerPageOptions = this.prepareRowsPerPageOptions(this.products.length);
    this.rows = this.rowsPerPageOptions[0];
  }

  next() {
    this.first = this.first + this.rows;
  }

  pageChange(event: PaginatorState) {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? 15;
  }
}
