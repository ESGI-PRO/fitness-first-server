import { Types } from 'mongoose';

export class MeetingDo {
  _id: Types.ObjectId;
  sender_id: Types.ObjectId;
  members: Array<Types.ObjectId>;
  date: String;
  time: String;
  description: String;

  constructor(props: Partial<MeetingDo>) {
    this._id = props._id || null;
    this.sender_id = props.sender_id || null;
    this.members = props.members || null;
    this.date = props.date;
    this.time = props.time;
  }
}
