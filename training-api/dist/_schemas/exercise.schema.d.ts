import { Document, ObjectId } from 'mongoose';
export type ExerciseDocument = Exercise & Document;
export declare class Exercise {
    user_id: ObjectId;
    trainer_id: ObjectId;
    content: object;
}
export declare const ExerciseSchema: any;
