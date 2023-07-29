import { IExercise } from '../interfaces/exercise.interface';

export interface IExercisesGetResponse {
  status: number;
  message: string;
  data: {
   exercises: Array<IExercise>;
  };
  errors: { [key: string]: any };
}
