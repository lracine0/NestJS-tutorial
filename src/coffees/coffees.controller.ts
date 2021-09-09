import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
// import { groupEnd } from 'console';
// import { response } from 'express';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  // where we can add methods that are connected by this controller
  @Get() // adding a string to our Get decorator allows us to have a '/coffees/flavors' route
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    // method where we return all information on cofees
    // const { limit, offset } = paginationQuery;
    // return `This action returns all coffees. Limit: ${limit}, Offset: ${offset}`;
    return this.coffeeService.findAll(paginationQuery);
  }
  // findAll(@Res() response) { allows us to give our own resp in the situation that we've deprecated
  // or changed a certain route

  @Get(':id') //expecting dynamic route parameter
  findOne(@Param('id') id: string) {
    //Param decorator allows us to grab all the incoming parameters
    //return `This action returns coffee #${id}`;
    return this.coffeeService.findOne(id);
  }

  @Post()
  //   @HttpCode(HttpStatus.GONE)
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    // @Body('name') can add string inside Body decorator to get specific value from the
    // post request that's happening instead of the entire Body (all JSON info)
    // return body;
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    // return `This action updates coffee #${id}`;
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    // return `This action deletes coffee #${id}`;
    return this.coffeeService.remove(id);
  }
}
