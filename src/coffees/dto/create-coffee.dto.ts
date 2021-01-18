import { IsNumber, IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly brand: string;
  @IsString({ each: true })
  readonly flavors: string[];
}
