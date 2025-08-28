import { CartItem } from './cart-item.model';

export interface Order {
  id: string;
  customerName: string;
  customerAddress: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  date: Date;
}