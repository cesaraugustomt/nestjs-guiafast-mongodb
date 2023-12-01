import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Account } from 'src/repository/schemas/account.schema';
import { Place } from 'src/repository/schemas/place.schema';

import { mockDataAccount } from './../../database/seeds/account.mock';
import { mockDataPlace } from './../../database/seeds/place.mock';

import { CreateAccountDto } from './../../account/dtos/Account.dto';
import { CreatePlaceDto } from './../../place/dtos/CreatePlace.dto';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel('Account') private readonly accountSchema: Model<Account>,
    @InjectModel('Place') private readonly placeSchema: Model<Place>,
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
    const seedPlaceData: CreatePlaceDto[] = mockDataPlace;

    try {
      const result = await this.placeSchema.insertMany(seedPlaceData);
      console.log('Dados inseridos com sucesso em places:', result);
    } catch (error) {
      throw new Error(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
      );
    }
  }
}
