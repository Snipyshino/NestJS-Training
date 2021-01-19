import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';
import { Connection, Model } from 'mongoose';
import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';

describe('CoffeesService', () => {
  let service: CoffeesService;
  let coffeeModel;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CoffeesService,
        { provide: getModelToken(Coffee.name), useValue: coffeeModel },
      ],
      imports: [
        // MongooseModule.forFeature([
        //   {
        //     name: Coffee.name,
        //     schema: CoffeeSchema,
        //   },
        // ]),
      ],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
