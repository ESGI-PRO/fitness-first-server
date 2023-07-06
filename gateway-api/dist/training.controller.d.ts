import { CreateExercicesDTO } from './interfaces-requests-responses/training/dto/create-exercices-dto';
import { ClientProxy } from '@nestjs/microservices';
import { GetTrainingResponseDto } from './interfaces-requests-responses/training/dto/get-training-response.dto';
import { CreateTrainingDTO } from './interfaces-requests-responses/training/dto/create-training-dto';
import { getTrainingIdDTO } from './interfaces-requests-responses/training/dto/get-training-id-dto';
import { GetExercicesResponseDto } from './interfaces-requests-responses/training/dto/get-exercices-response.dto';
import { getExercicesIdDTO } from './interfaces-requests-responses/training/dto/get-exercices-id-dto';
import { getTrainingUserIdDTO } from './interfaces-requests-responses/training/dto/get-training-userId-dto';
export declare class TrainingController {
    private readonly trainingServiceClient;
    constructor(trainingServiceClient: ClientProxy);
    getTrainings(): Promise<GetTrainingResponseDto>;
    getExercices(): Promise<GetExercicesResponseDto>;
    getCategoryExercices(): Promise<GetExercicesResponseDto>;
    createTraining(trainingData: CreateTrainingDTO): Promise<GetTrainingResponseDto>;
    getTrainingByID(params: getTrainingIdDTO): Promise<GetTrainingResponseDto>;
    getTrainingByUserID(params: getTrainingUserIdDTO): Promise<GetTrainingResponseDto>;
    updateTrainingByID(params: getTrainingIdDTO): Promise<GetTrainingResponseDto>;
    deleteTrainingByID(params: getTrainingIdDTO): Promise<GetTrainingResponseDto>;
    createExercices(exercicesData: CreateExercicesDTO): Promise<GetExercicesResponseDto>;
    getExercicesgByID(params: getExercicesIdDTO): Promise<GetExercicesResponseDto>;
    getExercicesgByCategory(params: getExercicesIdDTO): Promise<GetExercicesResponseDto>;
}
