import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SeedService } from './../service/seed.service';

@Controller('seed/place')
export class SeedPlaceController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async getSeed() {
    return 'Criação de Seed Place ok!!';
  }

  @Post('create')
  async seedData(): Promise<{ message: string }> {
    try {
      await this.seedService.seedDataPlace();
      return { message: 'Dados inseridos em place com sucesso.' };
    } catch (error) {
      throw new HttpException(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
