import { ProductRepository } from 'src/products/application/ports/product.repository';
import { Product } from 'src/products/domain/product';
import { ProductEntity } from '../entities/product.entity';
import { ProductMapper } from '../mappers/product.mapper';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryProductRepository implements ProductRepository {
  private readonly products: Map<string, ProductEntity> = new Map();
  async findAll(): Promise<Product[]> {
    const entities = Array.from(this.products.values());
    return entities.map((item) => ProductMapper.toDomain(item));
  }
  async save(product: Product): Promise<Product> {
    const entity = ProductMapper.toPersistence(product);
    this.products.set(product.id, entity);
    const newEntity = this.products.get(entity.id);
    return ProductMapper.toDomain(newEntity);
  }
}
