import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import { OrderService } from '../../services/order.service';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup;
  cartItems: any[];
  total: number;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private orderService: OrderService,
    private productService: ProductService,
    private router: Router
  ) {
    this.cartItems = this.cartService.getCart();
    this.total = this.cartService.getTotal();
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      this.cartItems.forEach(item => {
        this.productService.updateProductStock(item.product.id, item.quantity);
      });
      
      const order = this.orderService.createOrder(
        this.checkoutForm.value,
        this.cartItems
      );
      
      this.cartService.clearCart();
      this.router.navigate(['/confirmacion', order.id]);
    }
  }
}