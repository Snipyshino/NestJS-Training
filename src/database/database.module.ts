import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'mongoose';

@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    options.useCreateIndex = true;
    options.useNewUrlParser = true;
    options.useUnifiedTopology = true;

    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection('mongodb://localhost:27017/nest-course', options),
        },
      ],
    };
  }
}
