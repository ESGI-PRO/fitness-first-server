import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';
import { Document, ObjectId } from 'mongoose';

export type RoomDocument = room & Document;

@Schema({ versionKey: false, timestamps: true })
export class room {
  @Prop({ type: [SchemaTypes.ObjectId] })
  members: [ObjectId];
}

export const RoomSchema = SchemaFactory.createForClass(room);
