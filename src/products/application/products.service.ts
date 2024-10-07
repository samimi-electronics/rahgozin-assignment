import { Injectable } from '@nestjs/common';
import { CreateProductCommand } from './commands/create-product.command';
import { ProductRepository } from './ports/product.repository';
import { ProductFactory } from '../domain/factories/product.factory';
import BigNumber from 'bignumber.js';

@Injectable()
export class ProductsService {
  constructor(
    private readonly productRepository: ProductRepository,
    private readonly productFactory: ProductFactory,
  ) {}

  public async create(command: CreateProductCommand) {
    const product = this.productFactory.create(
      command.name,
      command.inventory,
      command.price,
    );
    return await this.productRepository.save(product);
  }

  public async findAll() {
    return await this.productRepository.findAll();
  }
}
