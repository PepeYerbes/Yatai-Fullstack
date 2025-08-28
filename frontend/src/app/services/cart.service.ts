import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Product } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    
  getCartObservable() {
    throw new Error('Method not implemented.');
  }
  private cartKey = 'shoppingCart';
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this.getCart());
  

cartItems$ = this.cartItemsSubject.asObservable(); // Observable para obtener los items del carrito
  // Agregar producto al carrito
  addToCart(product: Product, quantity: number = 1): void {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.product.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    this.saveCart(cart);
  }

  // Obtener carrito actual
  getCart(): CartItem[] {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : [];
  }

  // Eliminar producto del carrito
  removeFromCart(productId: number): void {
    let cart = this.getCart();
    cart = cart.filter(item => item.product.id !== productId);
    this.saveCart(cart);
  }

  // Actualizar cantidad de un producto
  updateQuantity(productId: number, quantity: number): void {
    const cart = this.getCart();
    const item = cart.find(i => i.product.id === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart(cart);
      }
    }
  }

  // Calcular total
  getTotal(): number {
    return this.getCart().reduce(
      (total, item) => total + (item.product.price * item.quantity), 
      0
    );
  }

  // Vaciar carrito
  clearCart(): void {
    localStorage.removeItem(this.cartKey);
  }

  // Guardar carrito en localStorage
  private saveCart(cart: CartItem[]): void {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartItemsSubject.next(cart); // Emitir el nuevo estado del carrito
  }

  // Obtener cantidad total de items
  getTotalItems(): number {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }
}