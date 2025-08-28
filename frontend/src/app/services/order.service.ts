import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';
import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersKey = 'orders';

  createOrder(orderData: any, cartItems: CartItem[]): Order {
    const orders = this.getOrders();
    const newOrder: Order = {
      id: this.generateOrderId(),
      customerName: orderData.name,
      customerAddress: orderData.address,
      customerEmail: orderData.email,
      items: [...cartItems],
      total: cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0),
      date: new Date()
    };

    orders.push(newOrder);
    localStorage.setItem(this.ordersKey, JSON.stringify(orders));

    return newOrder;
  }

  getOrders(): Order[] {
    const orders = localStorage.getItem(this.ordersKey);
    return orders ? JSON.parse(orders) : [];
  }

  getOrderById(id: string): Order | undefined {
    const orders = this.getOrders();
    return orders.find(o => o.id === id);
  }

  private generateOrderId(): string {
    return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }
}