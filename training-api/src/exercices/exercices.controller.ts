import { CreateExercicesDTO } from './exercices.dto';
import { ExercicesService } from './exercices.service';
import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';

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
    public async getByID(@Param('id') id: number) {
        const exercices = await this.exercicesAPI.findOne(id);
        return exercices;
    }

    @Post()
    @HttpCode(200)
    public async create(@Body() data: CreateExercicesDTO) {
        const exercices = await this.exercicesAPI.create(data);
        return exercices;
    }

    @Patch("/:id")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    public async update(@Param("id", ParseIntPipe) id: number, @Body() data: CreateExercicesDTO) {
        return this.exercicesAPI.update(id, data);
    }
    

    @Delete('/:id')
    @HttpCode(200)
    public async delete(@Param("id", ParseIntPipe) id: number) {
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
