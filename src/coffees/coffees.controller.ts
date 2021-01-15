import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeeService.findOne(String(id));
  }

  @Post()
  // @HttpCode(HttpStatus.GONE) // changes Http code in response
  create(@Body() coffeeDto: CreateCoffeeDto) {
    return this.coffeeService.create(coffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() coffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, coffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
