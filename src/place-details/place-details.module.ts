import { Module } from '@nestjs/common';
import { PlaceDetailsController } from './controller/place-details.controller';
import { PlaceDetailsService } from './service/place-details.service';
import { PlaceDetailsSchema } from 'src/repository/schemas/place-details.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'PlaceDetails', schema: PlaceDetailsSchema },
    ]),
  ],
  controllers: [PlaceDetailsController],
  providers: [PlaceDetailsService],
})
export class PlaceDetailsModule {}
