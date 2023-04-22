import { CreateExercicesOnTrainingDTO } from './exercices-on-training.dto';
import { ExercicesOnTrainingService } from './exercices-on-training.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('exercices-on-training')
export class ExercicesOnTrainingController {
  constructor(
    private readonly exercicesOnTrainingAPI: ExercicesOnTrainingService,
  ) {}

  @Get()
  @HttpCode(200)
  public async getAll() {
    try {
      const exercices = await this.exercicesOnTrainingAPI.findAll();
      return exercices;
    } catch (err) {
      return err;
    }
  }

  @Get('/:id')
  @HttpCode(200)
  public async getByID(@Param('id') id: number) {
    try {
      const exercices = await this.exercicesOnTrainingAPI.findOne(id);
      return exercices;
    } catch (err) {
      return err;
    }
  }

  @Post()
  @HttpCode(200)
  public async create(@Body() data: CreateExercicesOnTrainingDTO) {
    try {
      const exercices = await this.exercicesOnTrainingAPI.create(data);
      return exercices;
    } catch (err) {
      return err;
    }
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: CreateExercicesOnTrainingDTO,
  ) {
    return this.exercicesOnTrainingAPI.update(id, data);
  }

  @Delete('/:id')
  @HttpCode(200)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      const exercices = await this.exercicesOnTrainingAPI.remove(id);
      return exercices;
    } catch (err) {
      return err;
    }
  }
}
