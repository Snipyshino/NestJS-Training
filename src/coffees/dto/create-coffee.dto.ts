import { IsNumber, IsString } from 'class-validator';
import { Prop } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoffeeDto {

  @ApiProperty({description: 'name of coffee'})
  @IsString()
  readonly name: string;
  @ApiProperty({description: 'brand of coffee'})
  @IsString()
  readonly brand: string;
  @ApiProperty({description: 'flavours as array of stringy bits'})
  @IsString({ each: true })
  readonly flavors: string[];
}
