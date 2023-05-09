import { Controller, Get, Param, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { MessagePattern } from '@nestjs/microservices';
import { getIngredientDTO } from 'src/dto/getIngredientsDTO';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsApi: IngredientsService) {}

  @MessagePattern('get_ingredients')
  public async get(): Promise<any> {
    return this.ingredientsApi.getIngredients();
  }

  @MessagePattern('get_ingredients_by_id')
  getbyID(@Param('id') id: number): Promise<any> {
    return this.ingredientsApi.getIngredientByID(id);
  }

  @MessagePattern('create_ingredient')
  create(data): Promise<any> {
    return this.ingredientsApi.createIngredient(data);
  }

  @MessagePattern('get_ingredients_for_userId')
  getIngredientForUserByID(@Param('userId') userId: number): Promise<any> {
    return this.ingredientsApi.getIngredientForUserByID(userId);
  }
}
