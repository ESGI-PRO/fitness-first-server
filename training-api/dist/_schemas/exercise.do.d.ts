import { Types } from 'mongoose';
import { Exercise } from '../interfaces/exercise.interface';
export declare class ExerciseDo {
    _id: Types.ObjectId;
    user_id: Types.ObjectId;
    trainer_id: Types.ObjectId;
    content: Exercise;
    constructor(props: Partial<ExerciseDo>);
}
