import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';



export type ExerciseDocument = Exercise & Document;

@Schema({ versionKey: false, timestamps: true })
export class Exercise {
  @Prop({ type: SchemaTypes.ObjectId })
  user_id: ObjectId;

  @Prop({ type: SchemaTypes.ObjectId })
  trainer_id: ObjectId;

  @Prop({ type: SchemaTypes.Mixed })
  content: object;
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise);
