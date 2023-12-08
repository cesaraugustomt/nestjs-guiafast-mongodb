import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from 'src/repository/schemas/place.schema';

import { PlaceController } from './controller/place.controller';

import { PlaceService } from './service/place.service';
import { PlaceDetailsModule } from './../place-details/place-details.module';
import { PlaceDetailsService } from './../place-details/service/place-details.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
    PlaceDetailsModule,
  ],
  controllers: [PlaceController],
  providers: [PlaceService, PlaceDetailsService],
})
export class PlaceModule {}
