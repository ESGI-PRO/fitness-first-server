import { CreateExercicesDTO } from './exercices.dto';
import { ExercicesService } from './exercices.service';
export declare class ExercicesController {
    private readonly exercicesAPI;
    constructor(exercicesAPI: ExercicesService);
    getAll(): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    getByID(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    create(data: CreateExercicesDTO): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    update(params: {
        id: number;
    }, data: CreateExercicesDTO): Promise<unknown>;
    delete(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    getCategoriesExercicesByID(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    getExercicesByCategory(params: {
        id: number;
    }): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
    getCategoryExercices(): Promise<{
        message: string;
        data: {
            exercices: unknown;
        };
        errors: any;
    }>;
}
