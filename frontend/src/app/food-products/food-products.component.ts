import { Component, inject, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product, ProductsService } from './products.service';

@Component({
  selector: 'app-food-products',
  imports: [TableModule],
  templateUrl: './food-products.component.html',
})
export class FoodProductsComponent implements OnInit {
  private productService = inject(ProductsService);

  products!: Product[];

  ngOnInit() {
    this.productService.getProducts().subscribe((products: Product[]) =>{this.products = products;});
  }
}
