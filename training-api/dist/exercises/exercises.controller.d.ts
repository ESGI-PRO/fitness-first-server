import { ExercisesService } from './exercises.service';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { IExercisesGetResponse } from '../interfaces-requests-responses/responses/get-all-exercises-response';
import { IExerciseCreateResponse } from '../interfaces-requests-responses/responses/exercise-create-response';
export declare class ExercisesController {
    private readonly exercisesService;
    constructor(exercisesService: ExercisesService);
    createExercises(createExerciseDto: CreateExerciseDto): Promise<IExerciseCreateResponse>;
    getUserCurrentExercises(data: {
        user_id: string;
        trainer_id: string;
    }): Promise<IExercisesGetResponse>;
}
