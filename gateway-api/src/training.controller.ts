import { CreateExercicesDTO } from './requests/training/dto/create-exercices-dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Put,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Authorization } from './decorators/authorization.decorator';
import { firstValueFrom } from 'rxjs';
import { GetTrainingResponseDto } from './requests/training/dto/get-training-response.dto';
import { CreateTrainingDTO } from './requests/training/dto/create-training-dto';
import { getTrainingIdDTO } from './requests/training/dto/get-training-id-dto';
import { GetExercicesResponseDto } from './requests/training/dto/get-exercices-response.dto';
import { getExercicesIdDTO } from './requests/training/dto/get-exercices-id-dto';
import { getTrainingUserIdDTO } from './requests/training/dto/get-training-userId-dto';

@Controller('training')
@ApiTags('training')
export class TrainingController {
  constructor(
    @Inject('TRAINING_SERVICE')
    private readonly trainingServiceClient: ClientProxy,
  ) {}

  //! FETCH TRAININGS ----------------------------------------------------------------

  @Get('/')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async getTrainings(): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_trainings', {}),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  @Get('/exercices')
  @Authorization(false)
  @ApiOkResponse({
    type: GetExercicesResponseDto,
  })
  public async getExercices(): Promise<GetExercicesResponseDto> {
    const exercicesResponse: GetExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_exercices', {}),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercices: exercicesResponse.data.exercices,
      },
      errors: null,
    };
  }

  @Post('/')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async createTraining(
    @Body() trainingData: CreateTrainingDTO,
  ): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('create_training', trainingData),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  @Get('/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async getTrainingByID(
    @Param() params: getTrainingIdDTO,
  ): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_training_by_id', {
        id: params.id,
      }),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  @Get('/user/:userId')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async getTrainingByUserID(
    @Param() params: getTrainingUserIdDTO,
  ): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_training_by_UserId', {
        id: params.userId,
      }),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  @Put('/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async updateTrainingByID(
    @Param() params: getTrainingIdDTO,
  ): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('update_training_by_id', {
        id: params.id,
      }),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  @Delete('/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetTrainingResponseDto,
  })
  public async deleteTrainingByID(
    @Param() params: getTrainingIdDTO,
  ): Promise<GetTrainingResponseDto> {
    const trainingResponse: GetTrainingResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('delete_training_by_id', {
        id: params.id,
      }),
    );
    return {
      message: trainingResponse.message,
      data: {
        training: trainingResponse.data.training,
      },
      errors: null,
    };
  }

  //! FETCH EXERCICES ----------------------------------------------------------------

  @Post('/exercices')
  @Authorization(false)
  @ApiOkResponse({
    type: GetExercicesResponseDto,
  })
  public async createExercices(
    @Body() exercicesData: CreateExercicesDTO,
  ): Promise<GetExercicesResponseDto> {
    const exercicesResponse: GetExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('create_exercice', exercicesData),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercices: exercicesResponse.data.exercices,
      },
      errors: null,
    };
  }

  @Get('/exercices/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetExercicesResponseDto,
  })
  public async getExercicesgByID(
    @Param() params: getExercicesIdDTO,
  ): Promise<GetExercicesResponseDto> {
    const exercicesResponse: GetExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_exercice_by_id', {
        id: params.id,
      }),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercices: exercicesResponse.data.exercices,
      },
      errors: null,
    };
  }

  @Get('/exercices/category/')
  @Authorization(false)
  @ApiOkResponse({
    type: GetExercicesResponseDto,
  })
  public async getCategoryExercices(): Promise<GetExercicesResponseDto> {
    const exercicesResponse: GetExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_category_exercices', {}),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercices: exercicesResponse.data.exercices,
      },
      errors: null,
    };
  }

  @Get('/exercices/category/:id')
  @Authorization(false)
  @ApiOkResponse({
    type: GetExercicesResponseDto,
  })
  public async getExercicesgByCategory(
    @Param() params: getExercicesIdDTO,
  ): Promise<GetExercicesResponseDto> {
    const exercicesResponse: GetExercicesResponseDto = await firstValueFrom(
      this.trainingServiceClient.send('get_exercices_by_category', {
        id: params.id,
      }),
    );
    return {
      message: exercicesResponse.message,
      data: {
        exercices: exercicesResponse.data.exercices,
      },
      errors: null,
    };
  }

  
}
