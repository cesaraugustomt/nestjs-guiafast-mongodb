import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './../repository/schemas/account.schema';
import { AccountController } from './controller/account.controller';
import { AccountService } from './service/account.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
})
export class AccountModule {}
