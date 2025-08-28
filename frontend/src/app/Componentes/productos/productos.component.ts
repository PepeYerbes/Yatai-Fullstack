import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  products: Product[] = [];
  categories: string[] = [];
  selectedCategory: string | null = null;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.products = this.productService.getProducts();
    this.categories = this.getUniqueCategories();
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert(`${product.name} se añadió a tu carrito!`);
  }

  filterByCategory(category: string | null): void {
    this.selectedCategory = category;
    this.products = category 
      ? this.productService.getProductsByCategory(category)
      : this.productService.getProducts();
  }

  private getUniqueCategories(): string[] {
    const allCategories = this.productService.getProducts().map(p => p.category);
    return [...new Set(allCategories)];
  }
}