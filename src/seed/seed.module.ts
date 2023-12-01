import { Module } from '@nestjs/common';
import { SeedAccountController } from './controller/seed-account.controller';
import { SeedService } from './service/seed.service';
import { AccountSchema } from './../repository/schemas/account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from './../repository/schemas/place.schema';
import { SeedPlaceController } from './controller/seed-place.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Account', schema: AccountSchema },
      { name: 'Place', schema: PlaceSchema },
    ]),
  ],
  controllers: [SeedAccountController, SeedPlaceController],
  providers: [SeedService],
})
export class SeedModule {}
