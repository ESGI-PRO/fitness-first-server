import { IExercise } from '../interfaces/exercise.interface';
export interface IExerciseCreateResponse {
    status: number;
    message: string;
    data: {
        exercises: Array<IExercise> | null;
    };
    errors: {
        [key: string]: any;
    };
}
