import { RecettesService } from './recettes.service';
import { Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesApi: RecettesService) {}

  @MessagePattern('get_recettes')
  public async get(): Promise<any> {
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.recettesApi.getRecettes(),
      },
      errors: null,
    };
  }

  @MessagePattern('get_recettes_by_id')
  public async getbyID(params: { id: number }): Promise<any> {
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.recettesApi.getRecetteByID(params.id),
      },
      errors: null,
    };
  }

  @MessagePattern('create_recette')
  public async create(data): Promise<any> {
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.recettesApi.createRecette(data),
      },
      errors: null,
    };
  }

  @MessagePattern('get_recettes_by_userId')
  public async getRecetteForUserByID(params: { userId: string }): Promise<any> {
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.recettesApi.getRecetteForUserByID(params.userId),
      },
      errors: null,
    };
  }
}
