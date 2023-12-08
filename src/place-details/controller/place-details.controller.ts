import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { PlaceDetails } from 'src/repository/schemas/place-details.schema';
import { PlaceDetailsService } from '../service/place-details.service';

import { UpdatePlaceDetailsDto } from '../dtos/UpdatePlaceDetails.dto';
import { CreatePlaceDetailsDto } from '../dtos/CreatePlaceDetails.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';

@Controller('placedetails')
export class PlaceDetailsController {
  constructor(private placeDetailsService: PlaceDetailsService) {}

  @Get()
  async getAllPlaces(): Promise<PlaceDetails[]> {
    const places = await this.placeDetailsService.findAll();
    return places;
  }

  @Get(':id')
  async getPlace(@Param('id') id: string): Promise<PlaceDetails> {
    return this.placeDetailsService.findById(id);
  }

  @Post()
  async createPlace(
    @Body() createPlaceDetailsDto: CreatePlaceDetailsDto,
  ): Promise<PlaceDetails> {
    const mappedPlaceDetails: PlaceDetails = plainToClass(
      PlaceDetails,
      createPlaceDetailsDto,
    );
    // Valide o objeto mapeado usando class-validator
    const errors = await validate(mappedPlaceDetails);
    if (errors.length > 0) {
      // Trate os erros de validação conforme necessário
      throw new Error(`Erro de validação: ${errors.join(', ')}`);
    }

    // Chame o método create com o objeto mapeado
    const res = await this.placeDetailsService.create(mappedPlaceDetails);
    return res;
  }

  @Put(':id')
  async updatePlaceDetails(
    @Param('id') id: string,
    @Body() updatePlaceDetailsDto: UpdatePlaceDetailsDto,
  ): Promise<PlaceDetails> {
    const mappedPlaceDetails: PlaceDetails = plainToClass(
      PlaceDetails,
      updatePlaceDetailsDto,
    );
    const errors = await validate(mappedPlaceDetails);
    if (errors.length > 0) {
      throw new Error(`Erro de validação: ${errors.join(', ')}`);
    }
    return this.placeDetailsService.updateById(id, mappedPlaceDetails);
  }

  @Delete(':id')
  async deletePlace(@Param('id') id: string): Promise<PlaceDetails> {
    return this.placeDetailsService.deleteById(id);
  }
}
