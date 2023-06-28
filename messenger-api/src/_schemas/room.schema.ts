import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type RoomDocument = Room & Document;

@Schema({ versionKey: false, timestamps: true })
export class Room {
  @Prop({ type: SchemaTypes.ObjectId })
  sender_id: ObjectId;
  @Prop({ type: [SchemaTypes.ObjectId] })
  members: [ObjectId];
}

export const RoomSchema = SchemaFactory.createForClass(Room);
