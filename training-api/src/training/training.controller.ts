import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { TrainingService } from './training.service';
import { TrainingRequest, UpdateTrainingRequest } from './request/training.request';
import { TrainingInterceptor } from './training.interceptor';


@Controller("training")
@UseInterceptors(TrainingInterceptor)
export class TrainingController {
    constructor(private readonly trainingService: TrainingService) {}


    @Get()
    @HttpCode(200)
    public async getAllTrainings() {

        const trainings = await this.trainingService.findAllTrainings();
        return trainings;
    }

    @Get(":id")
    @HttpCode(200)
    public async getTraining(@Param("id", ParseIntPipe) id: number) {
        const training = await this.trainingService.findOne(id);
        return training;
    }

    @Post()
    @UsePipes(ValidationPipe)
    @HttpCode(201)
    public async createTraining(@Body() data: TrainingRequest) {
        const createTraining = await this.trainingService.createTraining(data);
        return createTraining;
    }

    @Patch(":id")
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    public async updateTraining(@Param("id", ParseIntPipe) id: number, @Body() data: UpdateTrainingRequest) {
        return this.trainingService.update(id, data);
    }

    @Delete(":id")
    @HttpCode(200)
    public async deleteTraining(@Param("id", ParseIntPipe) id: number ) {
        return this.trainingService.remove(id);
    }

}
