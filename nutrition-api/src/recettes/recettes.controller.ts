import { RecettesService } from './recettes.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesApi: RecettesService) {}

  @Get()
  get(): Promise<any>{
    return this.recettesApi.getRecettes();
  }

  @Get('/:id')
  getbyID(@Param('id') id: number): Promise<any>{
    return this.recettesApi.getRecetteByID(id);
  }

  @Post()
  create(data): Promise<any>{
    return this.recettesApi.createRecette(data)
  }

  @Get('/user/:userId')
  getRecetteForUserByID(@Param('userId') userId: number): Promise<any>{
    return this.recettesApi.getRecetteForUserByID(userId)
  }
}
