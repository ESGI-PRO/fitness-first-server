import { Controller, Inject, Get, Param, Post, Body } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Authorization } from './decorators/authorization.decorator';
import { GetNutritionResponseDto } from './requests/nutrition/dto/get-nutrition-response.dto';
import { firstValueFrom } from 'rxjs';
import { CreateIngredientDTO } from './requests/nutrition/dto/CreateIngredientDTO';
import { getIngredientIdDTO } from './requests//nutrition/dto/getIngredientId';
import { getIngredientUserIdDTO } from './requests/nutrition/dto/getIngredientUserID';
import { getCategorieIdDTO } from './requests/nutrition/dto/get-categorie-id-dto';

@Controller('nutrition')
@ApiTags('nutrition')
export class NutritionController {
  constructor(
    @Inject('NUTRITION_SERVICE')
    private readonly nutritionServiceClient: ClientProxy,
  ) {}

  //! FETCH INGREDIENTS

  @Get('/ingredients')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getIngredients(): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_ingredients', {}),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Post('/ingredients')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async createIngredient(
    @Body() ingredientData: CreateIngredientDTO,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('create_ingredient', ingredientData),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Get('/ingredients/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getIngredientByID(
    @Param() params: getIngredientIdDTO,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_ingredients_by_id', {
        id: params.id,
      }),
    );
    console.log(`Ingredient` + params.id);
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  //! FETCH RECETTES

  @Get('/categories')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getCategories(): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_categories', {}),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Get('/categories/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getCategorieById(
    @Param() params: getCategorieIdDTO
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_categorie_by_id', {
        id: params.id
      }),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  // @Post('/ingredients/:userId/user')
  // @Authorization(false)
  // @ApiOkResponse({
  //   type: GetNutritionResponseDto,
  // })
  // public async getIngredientByUserId(
  //   @Param() params: getIngredientUserIdDTO,
  // ): Promise<GetNutritionResponseDto> {
  //   const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
  //     this.nutritionServiceClient.send('get_ingredients_for_userId', {
  //       userId: params.userId,
  //     }),
  //   );
  //   return {
  //     message: nutritionResponse.message,
  //     data: {
  //       nutrition: nutritionResponse.data.nutrition,
  //     },
  //     errors: null,
  //   };
  // }

  // @Get()
  // public async getIngredients(): Promise<any> {
  //   const userResponse = await firstValueFrom(
  //     this.nutritionServiceClient.send('get_ingredients', {}),
  //   );

  //   return userResponse
  // }
}
