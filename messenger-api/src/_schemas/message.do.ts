import { Types } from 'mongoose';

export class MessageDo {
  _id: Types.ObjectId;
  room_id: Types.ObjectId;
  sender_id: Types.ObjectId;
  message: string;

  constructor(props: Partial<MessageDo>) {
    this._id = props._id || null;
    this.room_id = props.room_id || null;
    this.sender_id = props.sender_id || null;
    this.message = props.message || null;
  }
}
