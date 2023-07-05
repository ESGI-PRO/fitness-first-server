import { Document, ObjectId } from 'mongoose';
export type MessageDocument = Message & Document;
export declare class Message {
    room_id: ObjectId;
    sender_id: ObjectId;
    message: string;
}
export declare const MessageSchema: any;
