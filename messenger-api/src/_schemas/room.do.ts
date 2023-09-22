import { Types } from 'mongoose';

export class RoomDo {
  _id: Types.ObjectId;
  sender_id: Types.ObjectId;
  members: Array<Types.ObjectId>;

  constructor(props: Partial<RoomDo>) {
    this._id = props._id || null;
    this.sender_id = props.sender_id || null;
    this.members = props.members || null;
  }
}
