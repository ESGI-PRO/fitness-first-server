import { Document, ObjectId } from 'mongoose';
export type MeetingDocument = Meeting & Document;
export declare class Meeting {
    sender_id: ObjectId;
    members: [ObjectId];
    date: String;
    time: String;
}
export declare const MeetingSchema: any;
