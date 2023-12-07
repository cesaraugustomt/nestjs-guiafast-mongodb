import {
  Controller,
  Get,
  Post,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SeedService } from './../service/seed.service';

@Controller('seed/placedetails')
export class SeedPlaceDetailsController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  async getSeed() {
    return 'Criação de Seed Place Details ok!!';
  }

  @Post('create')
  async seedData(): Promise<{ message: string }> {
    try {
      await this.seedService.seedDataPlaceDetails();
      return { message: 'Dados inseridos com sucesso em place details.' };
    } catch (error) {
      throw new HttpException(
        `Erro ao inserir dados no banco de dados: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
