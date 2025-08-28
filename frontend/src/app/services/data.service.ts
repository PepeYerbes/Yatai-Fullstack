import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  initializeProducts(): Product[] {
    const defaultProducts: Product[] = [
        {
            id: 1,
            name: 'Aguas Frescas',
            description: 'Aguas frescas de sabores naturales y de temporada.',
            price: 20,
            imagenUrl: 'assets/imagen/aguas_frescas.jpg',
            stock: 15,
            category: 'Bebidas',
            
          },
          {
              id: 2,
              name: 'Bionicos',
              description: 'Frutas de temporada picadas y servidas con crema y topings.',
              price: 90,
              imagenUrl: 'assets/imagen/bionicos.jpg',
              stock: 15,
              category: 'snacks',
              
            },
    ];

    localStorage.setItem('products', JSON.stringify(defaultProducts));
    return defaultProducts;
  }
}