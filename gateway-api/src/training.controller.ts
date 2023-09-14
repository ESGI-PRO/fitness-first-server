import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Post,
  Request,
  Delete,
  Put
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { Authorization } from './decorators/authorization.decorator';
import { firstValueFrom } from 'rxjs';
import { CreateExercicesDto } from './interfaces-requests-responses/training/dto/create-exercises.dto';
import { CreateExercicesResponseDto } from './interfaces-requests-responses/training/dto/create-exercise-response.dto';
import { GetUserCurrentExercisesResponseDto } from './interfaces-requests-responses/training/dto/get-user-current-exercises-response.dto';
import { Permission } from './decorators/permission.decorator';

@Controller('training')
@ApiTags('training')
export class TrainingController {
  constructor(
    @Inject('TRAINING_SERVICE')
    private readonly trainingServiceClient: ClientProxy,
  ) {}

  @Post('/exercises')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('create_exercises')
  @ApiOkResponse({
    type: CreateExercicesResponseDto,
  })
  public async createExercices(
    @Body() exercicesData: CreateExercicesDto,
  ): Promise<CreateExercicesResponseDto> {
    const exercicesResponse: CreateExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('create_exercises', exercicesData),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercises: exercicesResponse.data.exercises,
      },
      errors: exercicesResponse.errors,
    };
  }

  @Get('/exercises/:trainer_id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_user_current_exercises')
  @ApiOkResponse({
    type: GetUserCurrentExercisesResponseDto,
  })
  public async getUserExercicesByTrainerID(
    @Param('trainer_id') trainer_id: string,
    @Request() req,
  ): Promise<GetUserCurrentExercisesResponseDto> {
    const data = {
      user_id: req.user.id,
      trainer_id
    }
    const exercicesResponse: GetUserCurrentExercisesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_user_current_exercises', data),
    );
    return exercicesResponse;
  }

  @Get('/exercises/trainer/:user_id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_user_current_exercises')
  @ApiOkResponse({
    type: GetUserCurrentExercisesResponseDto,
  })
  public async getUserExercicesByUserID(
    @Param('user_id') user_id: string,
    @Request() req,
  ): Promise<GetUserCurrentExercisesResponseDto> {
    const data = {
      trainer_id: req.user.id,
      user_id
    }
    const exercicesResponse: GetUserCurrentExercisesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_user_current_exercises', data),
    );
    return exercicesResponse;
  }

  @Get('/exercises')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  @Permission('get_all_exercises')
  @ApiOkResponse({
    type: GetUserCurrentExercisesResponseDto,
  })
  public async getAllExercices(): Promise<GetUserCurrentExercisesResponseDto> {
    const exercicesResponse: GetUserCurrentExercisesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_all_exercises', {}),
    );
    return exercicesResponse;
  }

  @Delete('/exercises/:id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  public async deleteExercice(@Param('id') id: string): Promise<any> {
    const exercicesResponse = await firstValueFrom(this.trainingServiceClient.send('training_delete_by_id', id));
    return exercicesResponse;
  }


  @Get('/exercises/f/:id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  public async getExerciceById(@Param('id') id: string): Promise<any> {
    const exercicesResponse = await firstValueFrom(this.trainingServiceClient.send('training_find_by_id', id));
    return exercicesResponse;
  }

  @Put('/exercises/:id')
  @Authorization(true)
  @ApiBearerAuth('access-token')
  public async updateExerciceById(@Param('id') id: string, @Body() exerciceParams: any): Promise<any> {
    const exercicesResponse = await firstValueFrom(this.trainingServiceClient.send('training_update_by_id', { id, exerciceParams }));
    return exercicesResponse;
  }
}