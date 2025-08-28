import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent {
  cartItems: CartItem[] = [];
  total = 0;
  totalItems = 0;

  constructor(
    private cartService: CartService,
    private router: Router
  ) {
    this.loadCart();
  }

  // Cargar datos del carrito
  loadCart(): void {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.totalItems = this.cartService.getTotalItems();
  }

  // Eliminar producto
  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
    this.loadCart();
  }

  // Actualizar cantidad
  updateQuantity(productId: number, event: Event): void {
    const input = event.target as HTMLInputElement;
    const quantity = parseInt(input.value, 10);
    
    if (!isNaN(quantity)) {
      this.cartService.updateQuantity(productId, quantity);
      this.loadCart();
    }
  }

  // Ir al checkout
  proceedToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

  // Continuar comprando
  continueShopping(): void {
    this.router.navigate(['/']);
  }
}