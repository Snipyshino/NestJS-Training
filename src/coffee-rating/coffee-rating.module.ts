import { Module } from '@nestjs/common';
import { CoffeeRatingService } from './coffee-rating.service';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [CoffeesModule,
    DatabaseModule.register({
      useNewUrlParser: true,
      useCreateIndex: true
    })],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {
}
