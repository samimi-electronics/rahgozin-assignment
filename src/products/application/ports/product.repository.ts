import { Product } from 'src/products/domain/product';

export abstract class ProductRepository {
  abstract findAll(): Promise<Product[]>;
  abstract save(product: Product): Promise<Product>;
}
