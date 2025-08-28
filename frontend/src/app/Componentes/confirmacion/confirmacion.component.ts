import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Order } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-confirmacion',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent {
  order?: Order;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.order = this.orderService.getOrderById(orderId);
    }
  }
}