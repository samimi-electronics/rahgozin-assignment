import { DynamicModule, Module, Type } from '@nestjs/common';
import { ProductsController } from '../presentation/http/products.controller';
import { ProductsService } from './products.service';
import { ProductFactory } from '../domain/factories/product.factory';
import { ProductRepository } from './ports/product.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductFactory],
})
export class ProductsModule {
  static withInfrastructure(infrastructureModule: Type | DynamicModule) {
    return {
      module: ProductsModule,
      imports: [infrastructureModule],
    };
  }
}
