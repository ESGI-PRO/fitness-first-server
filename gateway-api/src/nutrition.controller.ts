import { Controller, Inject, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { Authorization } from './decorators/authorization.decorator';
import { GetNutritionResponseDto } from './interfaces-requests-responses/nutrition/dto/get-nutrition-response.dto';
import { firstValueFrom } from 'rxjs';
import { CreateIngredientDTO } from './interfaces-requests-responses/nutrition/dto/CreateIngredientDTO';
import { getIngredientIdDTO } from './interfaces-requests-responses//nutrition/dto/getIngredientId';
import { getIngredientUserIdDTO } from './interfaces-requests-responses/nutrition/dto/getIngredientUserID';
import { getCategorieIdDTO } from './interfaces-requests-responses/nutrition/dto/get-categorie-id-dto';
import { createRecetteDTO } from './interfaces-requests-responses/nutrition/dto/create-recette.dto';
import { Permission } from './decorators/permission.decorator';

@Controller('nutrition')
@ApiTags('nutrition')
export class NutritionController {
  constructor(
    @Inject('NUTRITION_SERVICE')
    private readonly nutritionServiceClient: ClientProxy,
  ) {}

  //! FETCH RECETTES

  @Get('/')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_recettes')
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getRecettes(): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_recettes', {}),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Post('/')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('create_recette')
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async createRecettes(
    @Body() recettesData: createRecetteDTO,
  ): Promise<GetNutritionResponseDto> {
    console.log("recettesData====================")
    console.log(recettesData)
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('create_recette', recettesData),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Put('/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async updateRecette(
    @Body() data: any,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: any = await firstValueFrom(
      this.nutritionServiceClient.send('update_recette', data),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Get('/ingredients')
  @Authorization(false)
  @ApiBearerAuth('access-token')
  // @Permission('get_ingredients')
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
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('create_ingredient')
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


  @Put('/ingredients/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async updateIngredient(
    @Param() params: getIngredientIdDTO,
    @Body() ingredientData: any,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: any = await firstValueFrom(
      this.nutritionServiceClient.send('edit_ingredient', { id: Number(params.id), ingredientData }),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

  @Get('/categories/')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_categories')
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

  @Get('/:id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_recettes_by_id')
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getRecetteByID(
    @Param() params: getIngredientIdDTO,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_recettes_by_id', { id: params.id }),
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
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_ingredients_by_id')
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



  @Delete('/ingredients/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async deleteIngredient(
    @Param('id') id: string,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: any = await firstValueFrom(
      this.nutritionServiceClient.send('delete_ingredient', { id: Number(id) }),
    );
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }


  @Delete('/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async deleteRecette(
    @Param('id') id: string,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: any = await firstValueFrom(
      this.nutritionServiceClient.send('delete_recette', { id: Number(id) }),
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
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_categorie_by_id')
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getCategorieById(
    @Param() params: getCategorieIdDTO,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_categorie_by_id', {
        id: params.id,
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

  @Get('/:userId/user')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_recettes_by_userId')
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getRecettesByUserId(
    @Param() params: getIngredientUserIdDTO,
  ): Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto = await firstValueFrom(
      this.nutritionServiceClient.send('get_recettes_by_userId', {
        userId: params.userId,
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

  // @Get()
  // public async getIngredients(): Promise<any> {
  //   const userResponse = await firstValueFrom(
  //     this.nutritionServiceClient.send('get_ingredients', {}),
  //   );

  //   return userResponse
  // }
}
