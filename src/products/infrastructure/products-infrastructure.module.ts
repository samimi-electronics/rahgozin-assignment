import { Module } from '@nestjs/common';
import { OrmPersistenceModule } from './persistence/orm/orm-persitence.module';
import { InMemoryPersistenceModule } from './persistence/in-memory/in-memory-persitence.module';

@Module({})
export class ProductsInfrastructureModule {
  static use(driver: 'in-memory' | 'orm') {
    const persistenceModule =
      driver === 'orm' ? OrmPersistenceModule : InMemoryPersistenceModule;
    return {
      module: ProductsInfrastructureModule,
      imports: [persistenceModule],
      exports: [persistenceModule],
    };
  }
}
