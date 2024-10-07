import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/products/application/ports/product.repository';
import { InMemoryProductRepository } from './repositores/product.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: ProductRepository,
      useClass: InMemoryProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class InMemoryPersistenceModule {}
