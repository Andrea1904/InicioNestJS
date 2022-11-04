/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  //ParseIntPipe
} from '@nestjs/common';

import { Response } from 'express';
import { ParseIntPipe } from './../common/parse-int.pipe';
import { CreateProductDTO , UpdateProductDTO } from './../dtos/products.dtos'

import { ProductsService } from './../services/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId',ParseIntPipe) productId: number) { // parseIntPipe para garantizar que va un numbero
    // response.status(200).send({
    //   message: `product ${productId}`,
    // });
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDTO) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
   // return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}

  //@Put(':id')
  //update(@Param('id') id: number, @Body() payload: any) {
    //return {
   //   id,
    //  payload,
   // };
   // return this.productsService.update(+id, payload);
 // }

  //@Delete(':id')
  //delete(@Param('id') id: number) {
  //  return id;
 // }

