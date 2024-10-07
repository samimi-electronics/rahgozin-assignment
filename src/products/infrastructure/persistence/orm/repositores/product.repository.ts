import { ProductRepository } from 'src/products/application/ports/product.repository';
import { Product } from 'src/products/domain/product';
import { ProductEntity } from '../entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductMapper } from '../mappers/product.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OrmProductRepository implements ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}
  async findAll(): Promise<Product[]> {
    const entities = await this.productRepository.find();
    return entities.map((item) => ProductMapper.toDomain(item));
  }
  async save(product: Product): Promise<Product> {
    const entity = ProductMapper.toPersistence(product);
    const savedEntity = await this.productRepository.save(entity);
    return ProductMapper.toDomain(savedEntity);
  }
}
