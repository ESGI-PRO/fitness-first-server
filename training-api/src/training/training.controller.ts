import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TrainingService } from './training.service';
import {
  TrainingRequest,
  UpdateTrainingRequest,
} from './request/training.request';
import { TrainingInterceptor } from './training.interceptor';
import { MessagePattern } from '@nestjs/microservices';

@Controller('training')
@UseInterceptors(TrainingInterceptor)
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @MessagePattern('get_trainings')
  public async getAllTrainings() {
    const trainings = await this.trainingService.findAllTrainings();
    return {
      message: 'success message from Training Response',
      data: {
        training: trainings,
      },
      errors: null,
    };
  }

  @MessagePattern('get_training_by_id')
  public async getTraining(params: { id: number }) {
    const training = await this.trainingService.findOne(params.id);
    return {
      message: 'success message from Training Response',
      data: {
        training: training,
      },
      errors: null,
    };
  }


  @MessagePattern('get_training_by_UserId')
  public async getTrainingByUserId(params: { userId: string }) {
    const training = await this.trainingService.findAllByID(params.userId);
    return {
      message: 'success message from Training Response',
      data: {
        training: training,
      },
      errors: null,
    };
  }

  @MessagePattern('create_training')
  public async createTraining(data) {
    const createTraining = await this.trainingService.createTraining(data);
    return {
      message: 'success message from Training Response',
      data: {
        training: createTraining,
      },
      errors: null,
    };
  }

  @MessagePattern('update_training_by_id')
  public async updateTraining(
    params: { id: number },
    @Body() data: UpdateTrainingRequest,
  ) {
    return {
      message: 'success message from Training Response',
      data: {
        training: await this.trainingService.update(params.id, data),
      },
      errors: null,
    };
  }

  @MessagePattern('delete_training_by_id')
  public async deleteTraining(params: { id: number }) {
    return {
      message: 'success message from Training Response',
      data: {
        training: await this.trainingService.remove(params.id),
      },
      errors: null,
    };
  }
}
