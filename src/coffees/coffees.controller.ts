import {
  Body,
  Controller,
  Delete,
  Get, Inject,
  Param,
  Patch,
  Post,
  Query, SetMetadata,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from '../common/dto/pagination-query.dto';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Public } from '../common/decorators/public.decorator';
import { Protocol } from '../common/decorators/protocol.decorator';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService,
              // @Inject(REQUEST) private readonly request: Request
  ) {
    console.log('Controller made');
  }

  @Public()
  @Get()
  findAll(@Protocol('https') protocol: string, @Query() paginationQuery: PaginationQueryDto) {
    console.log(protocol);
    return this.coffeeService.findAll(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    // await new Promise(resolve => setTimeout(resolve, 5000));

    return this.coffeeService.findOne(id);
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
