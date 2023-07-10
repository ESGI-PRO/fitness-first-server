/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, ObjectId } from 'mongoose';
export type MeetingDocument = Meeting & Document;
export declare class Meeting {
    sender_id: ObjectId;
    members: [ObjectId];
    date: String;
    time: String;
    description: String;
}
export declare const MeetingSchema: import("mongoose").Schema<Meeting, import("mongoose").Model<Meeting, any, any, any, Document<unknown, any, Meeting> & Omit<Meeting & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Meeting, Document<unknown, {}, import("mongoose").FlatRecord<Meeting>> & Omit<import("mongoose").FlatRecord<Meeting> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
