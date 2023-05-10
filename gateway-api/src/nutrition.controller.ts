import {
  Controller,
  Inject,
  Get
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiOkResponse, ApiCreatedResponse } from '@nestjs/swagger';
import { Authorization } from './decorators/authorization.decorator';
import {GetNutritionResponseDto} from './requests/nutrition/dto/get-nutrition-response.dto'
import { firstValueFrom } from 'rxjs';

@Controller('nutrition')
@ApiTags('nutrition')
export class NutritionController {
  constructor(
    @Inject('NUTRITION_SERVICE') private readonly nutritionServiceClient: ClientProxy,
  ) {

  }


  @Get()
  @Authorization(false)
  @ApiOkResponse({
    type: GetNutritionResponseDto,
  })
  public async getNutrition() : Promise<GetNutritionResponseDto> {
    const nutritionResponse: GetNutritionResponseDto  =  await firstValueFrom(this.nutritionServiceClient.send('nutrition_get', {}));
    return {
      message: nutritionResponse.message,
      data: {
        nutrition: nutritionResponse.data.nutrition,
      },
      errors: null,
    };
  }

}
