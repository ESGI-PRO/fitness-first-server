import { IExercise } from "../exercise.interface";
export declare class GetUserCurrentExercisesResponseDto {
    status: number;
    message: string;
    data: {
        exercices: Array<IExercise>;
    };
    errors: {
        [key: string]: any;
    };
}
