import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Query,
  DefaultValuePipe,
  ParseArrayPipe,
  Logger,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';

import { PlaceService } from './../service/place.service';
import { Place } from 'src/repository/schemas/place.schema';
import { CreatePlaceDto } from '../dtos/CreatePlace.dto';
import { UpdatePlaceDto } from '../dtos/UpdatePlace.dto';

import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('place')
export class PlaceController {
  constructor(private placeService: PlaceService) {}
  private readonly logger = new Logger(PlaceController.name);

  @Get()
  async getAllPlaces(@Query() query: ExpressQuery): Promise<Place[]> {
    const places = await this.placeService.findAll(query);
    // const HATEOS = [
    //   {
    //     href: 'http://localhost:4579/api/place/details/:id',
    //     method: 'GET',
    //     rel: 'place_details',
    //   },
    //   {
    //     href: 'http://localhost:4579/api/place/promotions/:id',
    //     method: 'GET',
    //     rel: 'place_promotions',
    //   },
    // ];

    // const links = HATEOS;
    return places;
    // return { data: places, links };
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

  //GET /places/nearby?latitude=-17.3153582&longitude=-53.2153818&maxDistance=5000
  @Get('nearby/coords')
  async getNearbyPlaces(
    @Query('latitude', new DefaultValuePipe(-17.321299), ParseArrayPipe)
    latitude: number,
    @Query('longitude', new DefaultValuePipe(-53.2287697), ParseArrayPipe)
    longitude: number,
    @Query('maxDistance', new DefaultValuePipe(5000), ParseIntPipe)
    maxDistance: number,
  ) {
    this.logger.debug(
      `Latitude: ${latitude}, Longitude: ${longitude}, MaxDistance: ${maxDistance}`,
    );
    try {
      if (isNaN(latitude) || isNaN(longitude) || isNaN(maxDistance)) {
        throw new BadRequestException('Invalid coordinates or maxDistance');
      }

      const userCoordinates: [number, number] = [latitude, longitude];
      const places = await this.placeService.getPlacesNearUser(
        userCoordinates,
        maxDistance,
      );
      return { success: true, data: places };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
