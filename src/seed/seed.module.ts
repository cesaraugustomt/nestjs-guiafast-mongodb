import { Module } from '@nestjs/common';
import { SeedAccountController } from './controller/seed-account.controller';
import { SeedService } from './service/seed.service';
import { AccountSchema } from './../repository/schemas/account.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from './../repository/schemas/place.schema';
import { SeedPlaceController } from './controller/seed-place.controller';
import { PlaceDetailsSchema } from './../repository/schemas/place-details.schema';
import { SeedPlaceDetailsController } from './controller/seed-place-details.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Account', schema: AccountSchema },
      { name: 'Place', schema: PlaceSchema },
      { name: 'PlaceDetails', schema: PlaceDetailsSchema },
    ]),
  ],
  controllers: [
    SeedAccountController,
    SeedPlaceController,
    SeedPlaceDetailsController,
  ],
  providers: [SeedService],
})
export class SeedModule {}
