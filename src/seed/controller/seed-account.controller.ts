import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SeedService } from './../service/seed.service';

@Controller('seed/account')
export class SeedAccountController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async getSeed() {
    return 'Criação de Seed Account ok!!';
  }

  @Post('create')
  async seedData(): Promise<{ message: string }> {
    try {
      await this.seedService.seedDataAccount();
      return { message: 'Dados inseridos com sucesso.' };
    } catch (error) {
      throw new HttpException(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
