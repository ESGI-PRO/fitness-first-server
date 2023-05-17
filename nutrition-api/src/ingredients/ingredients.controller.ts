import { Controller, Get, Param, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { MessagePattern } from '@nestjs/microservices';
import { getIngredientDTO } from 'src/dto/getIngredientsDTO';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsApi: IngredientsService) {}

  @MessagePattern('get_ingredients')
  public async get(): Promise<any> {
    console.log('this.ingredientsApi');
    // return this.ingredientsApi.getIngredients();
    return {
      message: 'success get ingredients',
      data: {
        nutrition: await this.ingredientsApi.getIngredients(),
      },
      errors: null,
    };
  }

  @MessagePattern('get_ingredients_by_id')
  public async getbyID(params: {
    id: number;
  }): Promise<any> {
    console.log("id : " + params.id);
    return {
      message: 'success message from nutritionResponse',
      data: {
        nutrition: await this.ingredientsApi.getIngredientByID(params.id),
      },
      errors: null,
    };
  }

  @MessagePattern('create_ingredient')
  public async create(data): Promise<any> {
    return {
      message: 'success message from nutritionResponse',
      data: {
        nutrition: await this.ingredientsApi.createIngredient(data)
      },
      errors: null,
    };
  }

  @MessagePattern('get_ingredients_for_userId')
  public async getIngredientForUserByID(
    params: {
      userId: number;
    }
  ): Promise<any> {
    console.log("userId : " + params.userId);
    return {
      message: 'success message from nutritionResponse',
      data: {
        nutrition: await this.ingredientsApi.getIngredientForUserByID(params.userId)
      },
      errors: null,
    };

  }
}
