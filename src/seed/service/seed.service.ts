import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Account } from 'src/repository/schemas/account.schema';
import { Place } from 'src/repository/schemas/place.schema';
import { PlaceDetails } from '../../repository/schemas/place-details.schema';

import { mockDataAccount } from './../../database/seeds/account.mock';

// import { mockDataPlaceTipoB } from './../../database/seeds/places/tipo_b/place.mock';
import { mockDataPlaceAlimentos } from './../../database/seeds/places/alimentos_e_bebidas/place.mock';
import { mockDataPlaceDetailsAlimentos } from './../../database/seeds/places/alimentos_e_bebidas/placedetails.mock';

import { CreateAccountDto } from './../../account/dtos/Account.dto';
import { CreatePlaceDto } from './../../place/dtos/CreatePlace.dto';
import { CreatePlaceDetailsDto } from './../../place-details/dtos/CreatePlaceDetails.dto';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel('Account') private readonly accountSchema: Model<Account>,
    @InjectModel('Place') private readonly placeSchema: Model<Place>,
    @InjectModel('PlaceDetails')
    private readonly placeDetailsSchema: Model<PlaceDetails>,
  ) {}

  async seedDataAccount(): Promise<void> {
    const seedAccountData: CreateAccountDto[] = mockDataAccount;

    try {
      const result = await this.accountSchema.insertMany(seedAccountData);
      console.log('Dados inseridos com sucesso em accounts:', result);
    } catch (error) {
      throw new Error(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
      );
    }
  }

  async seedDataPlace(): Promise<void> {
    const seedPlaceData: CreatePlaceDto[] = mockDataPlaceAlimentos;

    try {
      const result = await this.placeSchema.insertMany(seedPlaceData);
      console.log('Dados inseridos com sucesso em places:', result);
    } catch (error) {
      throw new Error(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
      );
    }
  }

  async seedDataPlaceDetails(): Promise<void> {
    const seedPlaceDetailsData: CreatePlaceDetailsDto[] =
      mockDataPlaceDetailsAlimentos;

    try {
      const result =
        await this.placeDetailsSchema.insertMany(seedPlaceDetailsData);
      console.log('Dados inseridos com sucesso em places details:', result);
    } catch (error) {
      throw new Error(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
      );
    }
  }
}
