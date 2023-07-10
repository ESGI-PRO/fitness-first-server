import { CreateExercicesDTO } from './exercices-on-training.dto';
import { ExercicesOnTrainingService } from './exercices-on-training.service';
import { Body, Controller, Get, HttpCode, Param, ParseUUIDPipe, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('exercices-on-training')
export class ExercicesOnTrainingController {
    constructor(private readonly exercicesOnTrainingAPI: ExercicesOnTrainingService) {}

    @Get()
    @HttpCode(200)
    public async getAll() {
        const exercices = await this.exercicesOnTrainingAPI.findAll();
        return exercices;
    }

    @Get('/:id')
    @HttpCode(200)
    public async getByID(@Param('id') id: number) {
        const exercices = await this.exercicesOnTrainingAPI.findOne(id);
        return exercices;
    }

    @Get()
    @HttpCode(200)
    public async create(@Body() data: CreateExercicesDTO) {
        const exercices = await this.exercicesOnTrainingAPI.create(data);
        return exercices;
    }

    @Patch(":id")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    public async update(@Param("id", ParseUUIDPipe) id: number, @Body() data: CreateExercicesDTO) {
        return this.exercicesOnTrainingAPI.update(id, data);
    }
    

    @Get('/:id')
    @HttpCode(200)
    public async delete(@Param("id", ParseUUIDPipe) id: number) {
        const exercices = await this.exercicesOnTrainingAPI.remove(id);
        return exercices;
    }
}
