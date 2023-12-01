import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AccountController } from './controller/account.controller';
import { AccountService } from './service/account.service';

import { AccountSchema } from './../repository/schemas/account.schema';
import { PlaceSchema } from './../repository/schemas/place.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Account', schema: AccountSchema },
      { name: 'Place', schema: PlaceSchema },
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
