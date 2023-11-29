import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { AccountService } from '../service/account.service';
import { Account } from 'src/repository/schemas/account.schema';
import { CreateAccountDto } from '../dtos/Account.dto';
import { UpdateAccountDto } from '../dtos/UpdateAccount.dto';

@Controller('account')
export class AccountController {
  constructor(private accountService: AccountService) {}

  @Get()
  async getAllAccounts(): Promise<Account[]> {
    return this.accountService.findAll();
  }

  @Get(':id')
  async getAccount(@Param('id') id: string): Promise<Account> {
    return this.accountService.findById(id);
  }

  @Post()
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    return this.accountService.create(createAccountDto);
  }

  @Put(':id')
  async updateAccount(
    @Param('id')
    id: string,
    @Body() updateAccountDto: UpdateAccountDto,
  ): Promise<Account> {
    return this.accountService.updateById(id, updateAccountDto);
  }

  @Delete(':id')
  async deleteAccount(@Param('id') id: string): Promise<Account> {
    return this.accountService.deleteById(id);
  }
}
