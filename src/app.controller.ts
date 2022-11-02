import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Ajá perdido';
  }

  @Get('nuevo')
  newEndpoint() {
    return 'Crear nuevo metodo';
  }

  @Get('/ruta/')
  hello() {
    return '/tener en cuenta las rutas/ errores en express';
  }

  @Get('/product/:productId')
  getProduct(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Get('/categories/:id/products/:productId')
  getCategory(@Param('productId') productId: string, @Param('id') id: string) {
    return `product ${productId} and ${id}`;
  }
}
