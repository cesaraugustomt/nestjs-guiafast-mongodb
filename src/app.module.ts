import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { PlaceModule } from './place/place.module';
import { AccountModule } from './account/account.module';
import { SeedModule } from './seed/seed.module';
import { PlaceDetailsModule } from './place-details/place-details.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    AccountModule,
    PlaceModule,
    SeedModule,
    PlaceDetailsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
