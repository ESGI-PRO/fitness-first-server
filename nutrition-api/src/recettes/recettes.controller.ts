import { RecettesService } from './recettes.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesApi: RecettesService) {}

  @MessagePattern('get_recettes')
  get(): Promise<any>{
    return this.recettesApi.getRecettes();
  }

  @MessagePattern('get_recettes_by_id')
  getbyID(@Param('id') id: number): Promise<any>{
    return this.recettesApi.getRecetteByID(id);
  }

  @MessagePattern('create_recette')
  create(data): Promise<any>{
    return this.recettesApi.createRecette(data)
  }

  @MessagePattern('get_recettes_by_userId')
  getRecetteForUserByID(@Param('userId') userId: number): Promise<any>{
    return this.recettesApi.getRecetteForUserByID(userId)
  }
}
