import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
} from '@nestjs/common';

import { PlaceService } from './../service/place.service';
import { Place } from 'src/repository/schemas/place.schema';
import { CreatePlaceDto } from '../dtos/CreatePlace.dto';
import { UpdatePlaceDto } from '../dtos/UpdatePlace.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}

  @Get()
  async getAllPlaces(@Query() query: ExpressQuery): Promise<Place[]> {
    return this.placeService.findAll(query);
  }

  @Get(':id')
  async getPlace(@Param('id') id: string): Promise<Place> {
    return this.placeService.findById(id);
  }

  @Post()
  async createPlace(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placeService.create(createPlaceDto);
  }

  @Put(':id')
  async updatePlace(
    @Param('id')
    id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ): Promise<Place> {
    return this.placeService.updateById(id, updatePlaceDto);
  }

  @Delete(':id')
  async deletePlace(@Param('id') id: string): Promise<Place> {
    return this.placeService.deleteById(id);
  }
}
