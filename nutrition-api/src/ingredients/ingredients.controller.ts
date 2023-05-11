import { Controller, Get, Param, Post } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsApi: IngredientsService) {}

  @Get()
  get(): Promise<any> {
    return this.ingredientsApi.getIngredients();
  }

  @Get('/:id')
  getbyID(@Param('id') id: number): Promise<any> {
    return this.ingredientsApi.getIngredientByID(id);
  }

  @Post()
  create(data): Promise<any> {
    return this.ingredientsApi.createIngredient(data);
  }

  @Get('/user/:userId')
  getIngredientForUserByID(@Param('userId') userId: number): Promise<any> {
    return this.ingredientsApi.getIngredientForUserByID(userId);
  }

  @MessagePattern('nutrition_get')
  public async getNutritionTest(): Promise<any> {
    console.log("reached here creation")
    return {
      message: "success message from nutritionResponse",
      data: {
        nutrition: "nutritionResponse test data nutrition",
      },
      errors: null,
    }
  }
}
