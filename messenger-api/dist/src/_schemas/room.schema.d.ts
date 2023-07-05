import { Document, ObjectId } from 'mongoose';
export type RoomDocument = Room & Document;
export declare class Room {
    sender_id: ObjectId;
    members: [ObjectId];
}
export declare const RoomSchema: any;
