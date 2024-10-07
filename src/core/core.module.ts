import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApplicationBootstrapOptions } from 'src/common/interfaces/application-bootstrap-options.interface';

@Module({})
export class CoreModule {
  static forRoot(options: ApplicationBootstrapOptions) {
    const imports =
      options.driver === 'orm'
        ? [
            TypeOrmModule.forRoot({
              type: 'postgres',
              database: 'rahgozin_assignment',
              host: 'localhost',
              port: 5432,
              autoLoadEntities: true,
              synchronize: true,
              username: 'postgres',
              password: 'postgres',
            }),
          ]
        : [];
    return {
      module: CoreModule,
      imports,
    };
  }
}
