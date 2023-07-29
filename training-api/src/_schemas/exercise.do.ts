import { Types } from 'mongoose';
import { Exercise } from '../interfaces/exercise.interface';

export class ExerciseDo {
  _id: Types.ObjectId;
  user_id: Types.ObjectId;
  trainer_id: Types.ObjectId;
  content: Exercise;

  constructor(props: Partial<ExerciseDo>) {
    this._id = props._id || null;
    this.user_id = props.user_id || null;
    this.trainer_id = props.trainer_id || null;
    this.content = props.content || null;
  }
}
