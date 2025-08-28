import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Aguas Frescas',
      description: 'Bebidas de sabores naturales y de temporada.',
      price: 200,
      imagenUrl: 'assets/imagen/aguas_frescas.jpg',
      stock: 20,
      category: 'Bebidas',
      
    },
    {
        id: 2,
        name: 'Bionicos',
        description: 'Frutas de temporada picadas y servidas con crema y topings.',
        price: 90,
        imagenUrl: 'assets/imagen/bionicos.jpg',
        stock: 50,
        category: 'Snacks',
        
      },
      {
        id: 3,
        name: 'Cantaritos',
        description: 'Bebida a base de jugos citricos con una onza de tequila.',
        price: 110,
        imagenUrl: 'assets/imagen/cantaritos.jpg',
        stock: 80,
        category: 'Bebidas',
        
      },
      {
        id: 4,
        name: 'Chaskas',
        description: 'Snack tradicional en Aguascalientes.',
        price: 70,
        imagenUrl: 'assets/imagen/Chaskas.jpg',
        stock: 50,
        category: 'Snacks',
        
      },
      {
        id: 5,
        name: 'Chilaquiles',
        description: 'Tortilla dorada en tu salsa de preferencia.',
        price: 85,
        imagenUrl: 'assets/imagen/chilaquiles.jpg',
        stock: 50,
        category: 'Almuerzos',
        
      },
      {
        id: 6,
        name: 'Churros',
        description: 'Postre tradicional mexicano con toppings de tu eleccion.',
        price: 45,
        imagenUrl: 'assets/imagen/churros.jpg',
        stock: 50,
        category: 'Postres',
        
      },
      {
        id: 7,
        name: 'Coctel',
        description: 'Una mezcla refrescante y vibrante de sabores, perfecta para animar cualquier celebración con un toque sofisticado y divertido.',
        price: 105,
        imagenUrl: 'assets/imagen/coctel.jpg',
        stock: 50,
        category: 'Bebidas',
        
      },
      {
        id: 8,
        name: 'Crepas',
        description: 'Deliciosas y versátiles, disponibles en opciones dulces o saladas, rellenas de ingredientes frescos y acompañadas de toppings irresistibles',
        price: 80,
        imagenUrl: 'assets/imagen/crepas.jpg',
        stock: 50,
        category: 'Postres',
        
      },
      {
        id: 9,
        name: 'Donas',
        description: 'Esponjosas, jugosas y con un glaseado perfecto, ideales para un postre clásico que nunca pasa de moda.',
        price: 15,
        imagenUrl: 'assets/imagen/donas.jpg',
        stock: 100,
        category: 'Postres',
        
      },
      {
        id: 10,
        name: 'Dorichaskas',
        description: 'Una combinación crujiente y sabrosa que fusiona lo mejor de los snacks con el auténtico sabor del elote mexicano.',
        price: 80,
        imagenUrl: 'assets/imagen/donas.jpg',
        stock: 50,
        category: 'Snacks',
        
      },
      {
        id: 11,
        name: 'Duros Preparados',
        description: 'Frituras de harina crujientes bañadas en salsa picante, crema, queso, lechuga y cueritos, para los amantes de lo intenso.',
        price: 45,
        imagenUrl: 'assets/imagen/duros.jpg',
        stock: 100,
        category: 'Snacks',
        
      },
      {
        id: 12,
        name: 'Elotes Preparados',
        description: 'Elote tierno y jugoso, bañado en mayonesa, queso, chile y limón, una explosión de sabores en cada bocado.',
        price: 75,
        imagenUrl: 'assets/imagen/elote.jpg',
        stock: 50,
        category: 'Snacks',
        
      },
      {
        id: 13,
        name: 'Enchiladas',
        description: ' Tortillas rellenas de queso, bañadas en salsa roja o verde, acompañadas de crema y cebolla, un clásico de la cocina mexicana.',
        price: 90,
        imagenUrl: 'assets/imagen/enchiladas.jpg',
        stock: 50,
        category: 'Almuerzos',
        
      },
      {
        id: 14,
        name: 'Flautas',
        description: 'Tortillas enrolladas y fritas, rellenas de pollo o carne, acompañadas de crema y salsa, un bocado crujiente',
        price: 90,
        imagenUrl: 'assets/imagen/flautas.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 15,
        name: 'Hamburguesas con papas a la francesa',
        description: 'Jugosas y sabrosas, con carne de res, pollo o vegetales, acompañadas de pan fresco y aderezos al gusto.',
        price: 110,
        imagenUrl: 'assets/imagen/hamburguesas.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 16,
        name: 'HotDogs',
        description: 'Con salchicha jugosa y toppings variados, desde la clásica versión americana hasta estilos mexicanos con guacamole y jalapeños.',
        price: 40,
        imagenUrl: 'assets/imagen/hotdog.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 17,
        name: 'Maruchan',
        description: 'Fideos instantáneos con un sabor delicioso y una textura perfecta, ideales para un almuerzo rápido y satisfactorio.',
        price: 45,
        imagenUrl: 'assets/imagen/maruchan.jpg',
        stock: 60,
        category: 'Almuerzos',
        
      },
      {
        id: 18,
        name: 'Paletas de hielo',
        description: 'Refrescantes y coloridas ya sea de agua o crema, son ideales para combatir el calor.',
        price: 25,
        imagenUrl: 'assets/imagen/paletas.jpg',
        stock: 120,
        category: 'Postres',
        
      },
      {
        id: 19,
        name: 'Papas a la francesa',
        description: 'Crujientes y doradas, perfectas como acompañamiento o snack.',
        price: 40,
        imagenUrl: 'assets/imagen/papas_francesa.jpg',
        stock: 80,
        category: 'Snacks',
        
      },
      {
        id: 20,
        name: 'Tacos de carne asada',
        description: 'Tortillas rellenas de carne asada, cebolla, cilantro y salsa al gusto.',
        price: 30,
        imagenUrl: 'assets/imagen/tacos.jpg',
        stock: 120,
        category: 'Almuerzos',
        
      },
      {
        id: 21,
        name: 'Micheladas',
        description: 'Bebida refrescante a base de cerveza, jugo de limón, salsas y especias, ideal para disfrutar en cualquier ocasión.',
        price: 60,
        imagenUrl: 'assets/imagen/micheladas.jpg',
        stock: 80,
        category: 'Bebidas',
        
      },
      {
        id: 22,
        name: 'Tortas de Lechon',
        description: 'Tortas rellenas de cerdo al vapor, acompañadas de cebolla, aguacate y salsa.',
        price: 75,
        imagenUrl: 'assets/imagen/lechon.jpg',
        stock: 60,
        category: 'Almuerzos',
        
      },
      {
        id: 23,
        name: 'Tostadas',
        description: 'Crujientes y doradas, ideales para acompañar tus platillos favoritos o disfrutar solas con guacamole y salsa.',
        price: 55,
        imagenUrl: 'assets/imagen/tostadas.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 24,
        name: 'Wafles',
        description: 'Deliciosos y esponjosos, perfectos para el desayuno o como postre, con opciones dulces y saladas.',
        price: 70,
        imagenUrl: 'assets/imagen/wafles.jpg',
        stock: 50,
        category: 'Postres',
        
      },
      {
        id: 25,
        name: 'Bolillo con crema',
        description: 'Bolillo doradito relleno de crema jamon y chiles en vinagre, el tradicional antojo hidrocalido',
        price: 50,
        imagenUrl: 'assets/imagen/torta_resistol.jpg',
        stock: 100,
        category: 'Almuerzos',
        
      },
      {
        id: 26,
        name: 'Tacos dorados',
        description: 'Tortillas rellenas de pollo, carne, frijol o papa, fritas hasta dorarse y acompañadas de lechuga, crema y salsa.',
        price: 30,
        imagenUrl: 'assets/imagen/tacos_dorads.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 27,
        name: 'Fresas con crema',
        description: 'Fresas frescas y jugosas, servidas con crema dulce y un toque de canela, un postre clásico y delicioso.',
        price: 50,
        imagenUrl: 'assets/imagen/fresas_crema.jpg',
        stock: 60,
        category: 'Postres',
        
      },
      {
        id: 28,
        name: 'Tacos de guisado',
        description: 'Tortillas rellenas de guisado de carne, pollo o verduras, acompañadas de cebolla y salsa.',
        price: 35,
        imagenUrl: 'assets/imagen/guisados.jpg',
        stock: 80,
        category: 'Almuerzos',
        
      },
      {
        id: 29,
        name: 'Frapes',
        description: 'Bebida fría y espumosa, ideal para refrescarse en días calurosos, con sabores variados y un toque de crema.',
        price: 80,
        imagenUrl: 'assets/imagen/frapes.jpg',
        stock: 80,
        category: 'Bebidas',
        
      },
      {
        id: 30,
        name: 'Raspados',
        description: 'Bebida fría y refrescante, hecha con hielo raspado y jarabes de sabores, ideal para combatir el calor.',
        price: 30,
        imagenUrl: 'assets/imagen/raspados.jpg',
        stock: 80,
        category: 'Bebidas',
        
      },
    // Agrega más productos aquí...
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  updateProductStock(id: number, quantity: number): void {
    const product = this.products.find(p => p.id === id);
    if (product) {
      product.stock -= quantity;
    }
  }
}