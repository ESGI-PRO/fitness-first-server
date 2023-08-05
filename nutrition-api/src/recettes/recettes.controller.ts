import { RecettesService } from './recettes.service';
import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PrismaClient, Prisma } from '@prisma/client';
import { Response } from 'express';

const prisma = new PrismaClient();

@Controller('recettes')
export class RecettesController {
  constructor(private readonly recettesApi: RecettesService) {}

  // @MessagePattern('get_recettes')
  // public async get(): Promise<any[]> {
  //   const nutritions = await this.recettesApi.getRecettes();
  //   return nutritions;
  // }

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

  
  // public async get(): Promise<any> {
  //   return {
  //     // message: 'success get ingredients',
  //     data: {
  //       nutrition: await this.recettesApi.getRecettes()
  //     },
  //     errors: null,
  //   };
  //   // const recettes = await this.recettesApi.getRecettes()
  //   // return recettes
  //   // return { data: await this.recettesApi.getRecettes() };
  // }


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

  @MessagePattern('update_recette')
  public async update(data): Promise<any> {
    return {
      message: 'success update ingredients',
      data: {
        nutrition: await this.recettesApi.updateRecette(data),
      },
      errors: null,
    };
  }

  @MessagePattern('create_recette')
  public async create(data): Promise<any> {
    return {
      message: 'success create ingredients',
      data: {
        nutrition: await this.recettesApi.createRecette(data),
      },
      errors: null,
    };
  }

  @MessagePattern('get_recettes_by_userId')
  public async getRecetteForUserByID(params: { userId: string }): Promise<any> {
    return {
      message: 'success get ingredients by userid ',
      data: {
        nutrition: await this.recettesApi.getRecetteForUserByID(params.userId),
      },
      errors: null,
    };
  }

  @MessagePattern('delete_recette')
  public async deleteIngredient(data: { id: number }): Promise<any> {
    const { id } = data;
    const deletedIngredient = await this.recettesApi.deleteRecette(id);
    return {
      message: 'success delete recette',
      data: {
        nutrition: deletedIngredient,
      },
      errors: null,
    };
  }
}
