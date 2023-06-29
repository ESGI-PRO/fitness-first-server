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
    const recettes = await this.recettesApi.getRecettes()
    return {
      message: 'success get ingredients',
       data: {
         nutrition: recettes
       },
       errors: null,  
    }
    
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
  public async getbyID(params: {
    id: number;
  }): Promise<any> {
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
        nutrition: await this.recettesApi.createRecette(data)
      },
      errors: null,
    };
  }

  @MessagePattern('get_recettes_by_userId')
  public async getRecetteForUserByID(@Param('userId') userId: number): Promise<any> {
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.recettesApi.getRecetteForUserByID(userId)
      },
      errors: null,
    };
  }
}
