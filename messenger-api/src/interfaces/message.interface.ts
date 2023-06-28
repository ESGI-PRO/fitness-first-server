import { Document } from 'mongoose';

export interface IMessage extends Document {
  id?: string;
  sender_id: string;
  room_id: string;
  message: string;
}
