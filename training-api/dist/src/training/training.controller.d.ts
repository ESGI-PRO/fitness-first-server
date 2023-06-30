import { TrainingService } from './training.service';
import { UpdateTrainingRequest } from './request/training.request';
export declare class TrainingController {
    private readonly trainingService;
    constructor(trainingService: TrainingService);
    getAllTrainings(): Promise<{
        message: string;
        data: {
            training: any[];
        };
        errors: any;
    }>;
    getTraining(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            training: any;
        };
        errors: any;
    }>;
    getTrainingByUserId(params: {
        userId: string;
    }): Promise<{
        message: string;
        data: {
            training: any;
        };
        errors: any;
    }>;
    createTraining(data: any): Promise<{
        message: string;
        data: {
            training: import("@prisma/client/runtime").GetResult<{
                id: number;
                name: string;
                description: string;
                category: number;
                userId: string;
                image: string;
                listExercices: string[];
                durationStart: Date;
                durationEnd: Date;
                createdAt: Date;
                updatedAt: Date;
            }, unknown, never> & {};
        };
        errors: any;
    }>;
    updateTraining(params: {
        id: number;
    }, data: UpdateTrainingRequest): Promise<{
        message: string;
        data: {
            training: any;
        };
        errors: any;
    }>;
    deleteTraining(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            training: import("@prisma/client/runtime").GetResult<{
                id: number;
                name: string;
                description: string;
                category: number;
                userId: string;
                image: string;
                listExercices: string[];
                durationStart: Date;
                durationEnd: Date;
                createdAt: Date;
                updatedAt: Date;
            }, unknown, never> & {};
        };
        errors: any;
    }>;
}
