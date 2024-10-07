import { Product } from 'src/products/domain/product';
import { ProductEntity } from '../entities/product.entity';
import BigNumber from 'bignumber.js';

export class ProductMapper {
  static toDomain(entity: ProductEntity) {
    return new Product(
      entity.id,
      entity.name,
      entity.inventory,
      BigNumber(entity.price),
    );
  }
  static toPersistence(domain: Product) {
    const entity = new ProductEntity();
    entity.id = domain.id;
    entity.name = domain.name;
    entity.inventory = domain.inventory;
    return entity;
  }
}
