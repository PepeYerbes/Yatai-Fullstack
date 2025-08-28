import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItemCount = 0;

  constructor(private cartService: CartService) {
    // Suscribirse a cambios en el carrito
    this.cartService.cartItems$.subscribe(cartItems => {
      this.cartItemCount = cartItems.reduce((count, item) => count + item.quantity, 0);
    });
  }
}