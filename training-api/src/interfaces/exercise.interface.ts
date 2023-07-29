import { Document } from 'mongoose';


export interface  Exercise {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
}


export interface IExercise extends Document {
  id?: string;
  user_id: string;
  trainer_id: string;
  content:  Exercise;
}
