import { ExercisesRepository } from './exercises.repository';
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface";
export declare class ExercisesService {
    private readonly exercisesRepository;
    constructor(exercisesRepository: ExercisesRepository);
    createExercises(createExerciseDto: IExercise[]): Promise<any>;
    findUserCurrentExercises(data: {
        user_id: string;
        trainer_id: string;
    }): Promise<any>;
    findAllExercises(): Promise<any>;
}
