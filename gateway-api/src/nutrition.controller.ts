import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { firstValueFrom } from 'rxjs';
import { Authorization } from './decorators/authorization.decorator';

@Controller('nutrition')
@ApiTags('nutrition')
export class NutritionController {
  constructor(
    @Inject('NUTRITION_SERVICE')
    private readonly nutritionServiceClient: ClientProxy,
  ) {}

  @Get()
  public async getIngredients(): Promise<any> {
    const userResponse = await firstValueFrom(
      this.nutritionServiceClient.send('get_ingredients', {}),
    );

    return userResponse
  }
}
