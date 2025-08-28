
import { Routes } from '@angular/router';
import { ProductosComponent } from './Componentes/productos/productos.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { CheckoutComponent } from './Componentes/checkout/checkout.component';
import { ConfirmacionComponent } from './Componentes/confirmacion/confirmacion.component';
import { DetalleProductoComponent } from './Componentes/detalle-producto/detalle-producto.component';
import { HomeComponent } from './home/home.component';


export const routes: Routes = [
  { path: '',component: HomeComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'producto/:id', component: DetalleProductoComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmacion/:id', component: ConfirmacionComponent },
  { path: '**', redirectTo: '' }
];