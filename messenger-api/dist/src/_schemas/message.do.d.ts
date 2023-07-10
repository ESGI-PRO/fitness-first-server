import { Types } from 'mongoose';
export declare class MessageDo {
    _id: Types.ObjectId;
    room_id: Types.ObjectId;
    sender_id: Types.ObjectId;
    message: string;
    constructor(props: Partial<MessageDo>);
}
