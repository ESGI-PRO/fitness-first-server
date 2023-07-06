import { Types } from 'mongoose';
export declare class RoomDo {
    _id: Types.ObjectId;
    sender_id: Types.ObjectId;
    members: Array<Types.ObjectId>;
    constructor(props: Partial<RoomDo>);
}
