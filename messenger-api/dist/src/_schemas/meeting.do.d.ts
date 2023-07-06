import { Types } from 'mongoose';
export declare class MeetingDo {
    _id: Types.ObjectId;
    sender_id: Types.ObjectId;
    members: Array<Types.ObjectId>;
    date: String;
    time: String;
    description: String;
    constructor(props: Partial<MeetingDo>);
}
