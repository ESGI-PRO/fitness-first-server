import { CreateExercicesDTO } from './exercices-on-training.dto';
import { ExercicesOnTrainingService } from './exercices-on-training.service';
export declare class ExercicesOnTrainingController {
    private readonly exercicesOnTrainingAPI;
    constructor(exercicesOnTrainingAPI: ExercicesOnTrainingService);
    getAll(): Promise<any>;
    getByID(id: number): Promise<any>;
    create(data: CreateExercicesDTO): Promise<unknown>;
    update(id: number, data: CreateExercicesDTO): Promise<any>;
    delete(id: number): Promise<unknown>;
}
