import { Model } from 'mongoose';
import { ExerciseDo } from 'src/_schemas/exercise.do';
import { IExercise } from "../interfaces-requests-responses/interfaces/exercise.interface";
export declare class ExercisesRepository {
    private exerciseModel;
    constructor(exerciseModel: Model<ExerciseDo>);
    createExercises(exercises: IExercise[]): Promise<any>;
    findUserCurrentExercises({ user_id, trainer_id, }: {
        user_id: string;
        trainer_id: string;
    }): Promise<any>;
    findAllExercises(): Promise<any>;
}
