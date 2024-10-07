import { Module } from '@nestjs/common';
import { ProductRepository } from 'src/products/application/ports/product.repository';
import { OrmProductRepository } from './repositores/product.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    {
      provide: ProductRepository,
      useClass: OrmProductRepository,
    },
  ],
  exports: [ProductRepository],
})
export class OrmPersistenceModule {}
