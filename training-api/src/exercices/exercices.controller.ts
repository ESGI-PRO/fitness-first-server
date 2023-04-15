import { CreateExercicesDTO } from './exercices.dto';
import { ExercicesService } from './exercices.service';
import { Body, Controller, Get, HttpCode, Param, ParseUUIDPipe, Patch, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('exercices')
export class ExercicesController {
    constructor(private readonly exercicesAPI: ExercicesService) {}

    @Get()
    @HttpCode(200)
    public async getAll() {
        const exercices = await this.exercicesAPI.findAll();
        return exercices;
    }

    @Get('/:id')
    @HttpCode(200)
    public async getByID(@Param('id') id: string) {
        const exercices = await this.exercicesAPI.findOne(id);
        return exercices;
    }

    @Get()
    @HttpCode(200)
    public async create(@Body() data: CreateExercicesDTO) {
        const exercices = await this.exercicesAPI.create(data);
        return exercices;
    }

    @Patch(":id")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    public async update(@Param("id", ParseUUIDPipe) id: string, @Body() data: CreateExercicesDTO) {
        return this.exercicesAPI.update(id, data);
    }
    

    @Get('/:id')
    @HttpCode(200)
    public async delete(@Param("id", ParseUUIDPipe) id: string) {
        const exercices = await this.exercicesAPI.delete(id);
        return exercices;
    }

    @Get('/categories/:id')
    @HttpCode(200)
    public async getCategoriesExercices(@Param("id") id: number) {
        const exercices = await this.exercicesAPI.getCategorieExercices(id);
        return exercices;
    }
}
