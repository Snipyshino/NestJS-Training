import { Injectable, Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { Event, EventSchema } from '../events/entities/event.entity';
import { ConfigModule } from '@nestjs/config';
import coffeesConfig from 'src/config/coffees.config';

/*// Value based Provider Mock Class
class MockCoffeesService {}
*/

/*// Class Providers
class ConfigService {}
class DevConfigService {}
class ProdConfigService {}
*/

// Factory Provider
@Injectable()
export class CoffeeBrandsFactory {
  create() {
    return ['buddy brew', 'nescafe'];
  }
}

@Module({
  imports: [
    ConfigModule.forFeature(coffeesConfig), // Partial config namespace
    MongooseModule.forFeature([
      {
        name: Coffee.name,
        schema: CoffeeSchema,
      },
      {
        name: Event.name,
        schema: EventSchema,
      },
    ]),
  ],
  exports: [CoffeesService],
  controllers: [CoffeesController],

  providers: [
    CoffeesService,

    /*// Non-class-based Provider
    { provide: COFFEE_BRANDS, useValue: ['buddy brew', 'nescafe', 'oreilly'] },
    */

    /*    // Factory Provider
        CoffeeBrandsFactory,
        {
          provide: COFFEE_BRANDS,
          useFactory: (brandsFactory: CoffeeBrandsFactory) =>
            brandsFactory.create(),
          inject: [CoffeeBrandsFactory],
          scope: Scope.DEFAULT
        },*/

    /*    // Async Factory Provider
        CoffeeBrandsFactory,
        {
          provide: COFFEE_BRANDS,
          useFactory: async (connection: Connection): Promise<string[]> => {
            // Note "async" here, and Promise/Async event inside the Factory function
            // Could be a database connection / API call / etc
            // In our case we're just "mocking" this type of event with a Promise
            const coffeeBrands = await Promise.resolve(['buddy brew', 'nescafe', 'oreilly']); // Mock request
            // const coffeeBrands = await connection.collection('COFFEE_BRANDS') // Real deal
            return coffeeBrands;
          },
          inject: [Connection]
        },*/

    /*// Value based Provider
     { provide: CoffeesService, useValue: new MockCoffeesService() },
    */

    /*// Class Provider
        {
          provide: ConfigService,
          useClass:
            process.env.NODE_ENV === 'dev'
              ? DevConfigService
              : ProdConfigService,
        },
     */
  ],

})
export class CoffeesModule {
}
