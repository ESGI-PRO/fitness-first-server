import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type MessageDocument = Message & Document;

@Schema({ versionKey: false, timestamps: true })
export class Message {
  @Prop({ type: SchemaTypes.ObjectId })
  room_id: ObjectId;

  @Prop({ type: SchemaTypes.ObjectId })
  sender_id: ObjectId;

  @Prop()
  message: string;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
