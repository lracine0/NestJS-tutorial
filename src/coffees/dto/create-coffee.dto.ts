import { IsString } from 'class-validator';

export class CreateCoffeeDto {
  // expected input object shape for our coffees' controllers post request
  // must have id, name, brand, flavors
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsString({ each: true })
  readonly flavors: string[];
}
