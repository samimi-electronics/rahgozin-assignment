import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from 'src/products/application/products.service';
import { CreateProductCommand } from 'src/products/application/commands/create-product.command';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post('/')
  public create(@Body() dto: CreateProductDto) {
    return this.productsService.create(
      new CreateProductCommand(dto.name, dto.inventory, dto.price),
    );
  }

  @Get('/')
  public findAll() {
    return this.productsService.findAll();
  }
}
