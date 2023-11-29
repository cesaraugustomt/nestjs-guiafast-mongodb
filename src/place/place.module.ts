import { Module } from '@nestjs/common';
import { PlaceController } from './controller/place.controller';
import { PlaceService } from './service/place.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PlaceSchema } from 'src/repository/schemas/place.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Place', schema: PlaceSchema }]),
  ],
  controllers: [PlaceController],
  providers: [PlaceService],
})
export class PlaceModule {}
