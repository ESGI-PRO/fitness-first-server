import { IExercise } from "../exercise.interface";
export declare class CreateExercicesResponseDto {
    message: string;
    data: {
        exercices: Array<IExercise>;
    };
    errors: {
        [key: string]: any;
    };
}
