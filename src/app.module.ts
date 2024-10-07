import { Module } from '@nestjs/common';
import { ProductsModule } from './products/application/products.module';
import { CoreModule } from './core/core.module';
import { ApplicationBootstrapOptions } from './common/interfaces/application-bootstrap-options.interface';
import { ProductsInfrastructureModule } from './products/infrastructure/products-infrastructure.module';

@Module({
  imports: [CoreModule],
})
export class AppModule {
  static register(options: ApplicationBootstrapOptions) {
    return {
      module: AppModule,
      imports: [
        CoreModule.forRoot(options),
        ProductsModule.withInfrastructure(
          ProductsInfrastructureModule.use(options.driver),
        ),
      ],
    };
  }
}
