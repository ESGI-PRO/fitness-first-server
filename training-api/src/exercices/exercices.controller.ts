import { MessagePattern } from '@nestjs/microservices';
import { CreateExercicesDTO } from './exercices.dto';
import { ExercicesService } from './exercices.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseUUIDPipe,
  Patch,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('exercices')
export class ExercicesController {
  constructor(private readonly exercicesAPI: ExercicesService) {}

  @MessagePattern('get_exercices')
  public async getAll() {
    const exercices = await this.exercicesAPI.findAll();
    return {
      message: 'success message from exercicesResponse',
      data: {
        exercices: exercices,
      },
      errors: null,
    };
  }

  @MessagePattern('get_exercice_by_id')
  public async getByID(params: { id: number }) {
    const exercices = await this.exercicesAPI.findOne(params.id);
    return {
      message: 'success message from exercicesResponse',
      data: {
        exercices: exercices,
      },
      errors: null,
    };
  }

  @MessagePattern('create_exercice')
  public async create(@Body() data: CreateExercicesDTO) {
    const exercices = await this.exercicesAPI.create(data);
    return {
      message: 'success message from exercicesResponse',
      data: {
        exercices: exercices,
      },
      errors: null,
    };
  }

  @MessagePattern('update_exercice_by_id')
  public async update(
    params: {
      id: number;
    },
    @Body() data: CreateExercicesDTO,
  ) {
    return this.exercicesAPI.update(params.id, data);
  }

  @MessagePattern('delete_exercice_by_id')
  public async delete(params: { id: number }) {
    const exercices = await this.exercicesAPI.delete(params.id);
    return {
      message: 'success message from exercicesResponse',
      data: {
        exercices: exercices,
      },
      errors: null,
    };
  }

  @MessagePattern('get_category_exercices_by_id')
  public async getCategoriesExercices(params: { id: number }) {
    const exercices = await this.exercicesAPI.getCategorieExercices(params.id);
    return {
      message: 'success message from exercicesResponse',
      data: {
        exercices: exercices,
      },
      errors: null,
    };
  }
}
