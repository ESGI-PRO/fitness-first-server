import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type MeetingDocument = Meeting & Document;

@Schema({ versionKey: false, timestamps: true })
export class Meeting {
  @Prop({ type: SchemaTypes.ObjectId })
  sender_id: ObjectId;
  @Prop({ type: [SchemaTypes.ObjectId] })
  members: [ObjectId];
  @Prop({ type: String })
  date: String;
  @Prop({ type: String })
  time: String;
  @Prop({ type: String })
  description: String;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
