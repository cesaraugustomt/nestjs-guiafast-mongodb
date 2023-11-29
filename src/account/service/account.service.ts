import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Account } from 'src/repository/schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: mongoose.Model<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    const accounts = await this.accountModel.find();
    return accounts;
  }

  async findById(id: string): Promise<Account> {
    const account = await this.accountModel.findById(id);

    if (!account) {
      throw new NotFoundException('Usuário não encontrado.');
    }

    return account;
  }

  async create(account: Account): Promise<Account> {
    const res = await this.accountModel.create(account);
    return res;
  }

  async updateById(id: string, account: Account): Promise<Account> {
    return await this.accountModel.findByIdAndUpdate(id, account, {
      new: true,
      runValidators: true,
    });
  }

  async deleteById(id: string): Promise<Account> {
    return await this.accountModel.findByIdAndDelete(id);
  }
}
