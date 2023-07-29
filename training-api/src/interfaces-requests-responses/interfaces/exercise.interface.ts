import {Exercise} from "../../interfaces/exercise.interface";

export interface IExercise {
    user_id: string;
    trainer_id: string;
    content: Exercise;
}